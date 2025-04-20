import { AlexaInterface, AlexaInterfaceType } from "./AlexaInterface";
import { DisplayCategory } from "./DisplayCategory";
import { EventEmitter } from "events";
import { MqttClient } from "mqtt";
import { AlexaStatusMessage } from "./AlexaStatusMessage";

class Device extends EventEmitter {
  protected softwareVersion: string = "1.0.0";
  private capabilities: AlexaInterface[] = [];

  constructor(
    private mqttClient: MqttClient,
    private rootTopic: string,
    public name: string,
    public endpointId: string,
    public displayCategory: DisplayCategory = DisplayCategory.LIGHT,
    public description: string = "Alexa to Node.js bridge",
    public manufacturerName: string = "Alex2Node",
    public manufacturer: string = "Alex2Node",
    public model: string = "Alex2Node_v1.0.0"
  ) {
    super();
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getEndpointId(): string {
    return this.endpointId;
  }

  setDisplayCategory(category: DisplayCategory): void {
    this.displayCategory = category;
  }

  getDisplayCategory(): DisplayCategory {
    return this.displayCategory;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }
  getStatusMessage(
    correlationToken: string,
    isResponse = false
  ): AlexaStatusMessage {
    return new AlexaStatusMessage(
      correlationToken,
      this.rootTopic,
      this.endpointId,
      this.mqttClient,
      isResponse
    );
  }
  setManufacturerName(name: string): void {
    this.manufacturerName = name;
  }

  getManufacturerName(): string {
    return this.manufacturerName;
  }

  setManufacturer(manufacturer: string): void {
    this.manufacturer = manufacturer;
  }

  getManufacturer(): string {
    return this.manufacturer;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getModel(): string {
    return this.model;
  }

  getSoftwareVersion(): string {
    return this.softwareVersion;
  }

  addCapability(type: AlexaInterfaceType): AlexaInterface {
    const existing = this.capabilities.find(
      (iface) => iface.getType() === type
    );
    if (existing) {
      return existing;
    }

    const newCapability = new AlexaInterface(type);
    this.capabilities.push(newCapability);

    // console.log(
    //   `Created new interface with type: ${newCapability.getTypeString()}`
    // );
    return newCapability;
  }
  getJSON(): Record<string, any> {
    return {
      endpointId: this.endpointId,
      friendlyName: this.name,
      description: this.description,
      manufacturerName: this.manufacturerName,
      displayCategories: [this.displayCategory],
      additionalAttributes: {
        manufacturer: this.manufacturer,
        model: this.model,
        serialNumber: "Alex2Node",
        firmwareVersion: "1.0.0",
        softwareVersion: this.softwareVersion,
        customIdentifier: "Alex2Node",
      },
      capabilities: this.capabilities.map((cap) => cap.getJSON()),
    };
  }
}

export default Device;
