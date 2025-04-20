import { v4 as uuidv4 } from "uuid";
import { AlexaInterface, AlexaInterfaceType } from "./AlexaInterface";
import { MqttClient } from "mqtt";

export enum EndpointHealth {
  OK = "OK",
  UNREACHABLE = "UNREACHABLE",
}

export enum PowerController {
  ON = "ON",
  OFF = "OFF",
}

export enum TemperatureSensorScale {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT",
}

interface DirectiveHeader {
  namespace: string;
  name: string;
  payloadVersion: string;
  messageId: string;
  correlationToken: string;
}

interface DirectiveEndpoint {
  endpointId: string;
}

interface ContextProperty {
  namespace: string;
  name: string;
  value: any;
  timeOfSample: string;
  uncertaintyInMilliseconds: number;
  instance?: string;
}

export class AlexaStatusMessage {
  private context: { properties: ContextProperty[] } = { properties: [] };
  private event: {
    header: DirectiveHeader;
    endpoint: DirectiveEndpoint;
    payload: {};
  };
  private rootTopic: string;
  private endpointId: string;
  private mqttClient: MqttClient;

  constructor(
    correlationToken: string,
    rootTopic: string,
    endpointId: string,
    mqttClient: MqttClient,
    isResponse: boolean = false
  ) {
    this.rootTopic = rootTopic;
    this.endpointId = endpointId;
    this.mqttClient = mqttClient;

    this.event = {
      header: {
        namespace: "Alexa",
        name: isResponse ? "Response" : "StateReport",
        payloadVersion: "3",
        messageId: this.generateMessageId(),
        correlationToken,
      },
      endpoint: {
        endpointId,
      },
      payload: {},
    };
  }

  private generateMessageId(): string {
    return uuidv4();
  }

  private getTimestamp(): string {
    return new Date().toISOString();
  }

  private addProperty(
    namespace: AlexaInterfaceType,
    name: string,
    value: any,
    uncertaintyInMilliseconds = 0,
    instance?: string
  ): this {
    const prop: ContextProperty = {
      namespace,
      name,
      value,
      timeOfSample: this.getTimestamp(),
      uncertaintyInMilliseconds,
    };
    if (instance) prop.instance = instance;
    this.context.properties.push(prop);
    return this;
  }

  public addHealthProp(health: EndpointHealth, uncertaintyInMs = 0): this {
    return this.addProperty(
      AlexaInterfaceType.ENDPOINT_HEALTH,
      "connectivity",
      { value: health },
      uncertaintyInMs
    );
  }

  public addPowerControllerProp(
    power: PowerController,
    uncertaintyInMs = 0
  ): this {
    return this.addProperty(
      AlexaInterfaceType.POWER_CONTROLLER,
      "powerState",
      power,
      uncertaintyInMs
    );
  }

  public addTemperatureSensorProp(
    scale: TemperatureSensorScale,
    value: number,
    uncertaintyInMs = 0
  ): this {
    const tempValue = {
      value:
        scale === TemperatureSensorScale.FAHRENHEIT
          ? (value - 32) * (5 / 9)
          : value,
      scale: "CELSIUS",
    };
    return this.addProperty(
      AlexaInterfaceType.TEMPERATURE_SENSOR,
      "temperature",
      tempValue,
      uncertaintyInMs
    );
  }

  public addBrightnessControllerProp(
    brightness: number,
    uncertaintyInMs = 0
  ): this {
    return this.addProperty(
      AlexaInterfaceType.BRIGHTNESS_CONTROLLER,
      "brightness",
      brightness,
      uncertaintyInMs
    );
  }

  public addColorTemperatureControllerProp(
    colorTemp: number,
    uncertaintyInMs = 0
  ): this {
    return this.addProperty(
      AlexaInterfaceType.COLOR_TEMPERATURE_CONTROLLER,
      "colorTemperatureInKelvin",
      colorTemp,
      uncertaintyInMs
    );
  }

  public addToggleControllerProp(
    state: PowerController,
    instance: string,
    uncertaintyInMs = 0
  ): this {
    return this.addProperty(
      AlexaInterfaceType.TOGGLE_CONTROLLER,
      "toggleState",
      state,
      uncertaintyInMs,
      instance
    );
  }

  public addContextProp(prop: ContextProperty): this {
    this.context.properties.push(prop);
    return this;
  }

  public send(): void {
    const payload = {
      context: this.context,
      event: this.event,
    };
    const topic = `${this.rootTopic}/${this.endpointId}/alexaResponce`;//Yes this should be response but it is incorrect in both Alex2MQTT and Alex2ESP so for consistency is is wrong here too
    const payloadStr = JSON.stringify(payload);

    this.mqttClient.publish(topic, payloadStr, (err) => {
      if (err) {
        console.error(
          "[AlexaStatusMessage] Failed to publish status message:",
          err
        );
      } else {
        // console.log(`[AlexaStatusMessage] Sent message to ${topic}`);
      }
    });
  }
}
