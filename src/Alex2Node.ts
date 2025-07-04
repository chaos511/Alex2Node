import mqtt, { MqttClient } from "mqtt";
import Device from "./Device";
import { EventEmitter } from "events";
import { DisplayCategory } from "./DisplayCategory";

class Alex2MQTT extends EventEmitter {
  private client: MqttClient | null = null;
  private devices: Device[] = [];
  private MqttHost = "mqtt://Alex2MQTT.stormysdream.club";

  constructor(
    private username: string,
    private password: string,
    private rootTopic: string,
    private debugLogging: boolean
  ) {
    super(); // Initialize EventEmitter
  }

  connect(): void {
    const options = {
      username: this.username,
      password: this.password,
    };

    this.client = mqtt.connect(this.MqttHost, options);

    this.client.on("connect", () => {
      if (this.debugLogging) {
        console.log("[Alex2Node.ts] Connected to MQTT broker");
      }

      this.client!.subscribe(this.rootTopic + "/#", (err) => {
        if (this.debugLogging && !err) {
          console.log("[Alex2Node.ts] Subscribed to topics");
        }
        if (err) {
          console.error("[Alex2Node.ts] MQTT connection error:", err);
          this.emit("error", err);
        }
      });
    });

    this.client.on("message", (topic: string, message: Buffer) => {
      if (this.debugLogging) {
        console.log(`[Alex2Node.ts] MQTT Message Received`);
        console.log(`  Topic: ${topic}`);
        console.log(`  Payload: ${message.toString()}`);
      }
      if (topic == `${this.rootTopic}/discover`) {
        if (this.debugLogging) {
          console.log(
            "[Alex2Node.ts] Discovery request received, getting device json..."
          );
        }
        const deviceArray = this.devices.map((device) => device.getJSON());

        if (deviceArray.length > 0) {
          this.client!.publish(
            topic + "_r",
            JSON.stringify(deviceArray),
            (err) => {
              if (err) {
                console.error("[Alex2Node.ts] MQTT connection error:", err);
                this.emit("error", err);
              } else if (this.debugLogging) {
                console.log(
                  `[Alex2Node.ts] Discovery payloads published to ${
                    topic + "_r"
                  }`
                );
                console.log(JSON.stringify(deviceArray, null, 2));
              }
            }
          );
        }
      } else if (topic.split("/").length == 3) {
        const [root, endpointId, directiveType] = topic.split("/");
        if (directiveType != "alexaDirective") {
          return;
        }
        const device = this.devices.find((d) => d.endpointId === endpointId);
        if (!device) {
          if (this.debugLogging) {
            console.warn(
              `[Alex2Node.ts] No device found for endpointId: ${endpointId}`
            );
          }
          return;
        }
        let payload;
        try {
          payload = JSON.parse(message.toString());
        } catch (e) {
          console.error(`[Alex2Node.ts] Failed to parse payload JSON`, e);
          return;
        }
        if (
          payload.header &&
          payload.header.namespace === "Alexa" &&
          payload.header.name === "ReportState"
        ) {
          if (this.debugLogging) {
            console.log(
              `[Alex2Node.ts] ReportState directive for device ${endpointId}`
            );
          }
          device.emit("ReportState", payload);
        } else {
          device.emit("Event", payload, payload.header.namespace);
        }
      }
    });
    this.client.on("error", (err: Error) => {
      if (this.debugLogging) {
        console.error("[Alex2Node.ts] Connection failed:", err);
      }
      console.error("[Alex2Node.ts] MQTT connection error:", err);
      this.emit("error", err);
    });
  }

  registerDevice(
    name: string,
    endpointId: string,
    displayCategory: DisplayCategory | DisplayCategory[] | null
  ): Device {
    if (!this.client) {
      throw new Error("Must call connect before creating devices");
    }
    if (this.debugLogging) {
      console.log(
        `[Alex2Node.ts] Creating new device with endpoint: ${endpointId}`
      );
    }
    const normalizedCategory =
      displayCategory === null
        ? null
        : Array.isArray(displayCategory)
        ? displayCategory
        : [displayCategory];

    const device = new Device(
      this.client!,
      this.rootTopic,
      name,
      endpointId,
      normalizedCategory
    );
    this.devices.push(device);
    return device;
  }
}

export default Alex2MQTT;
