"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlexaInterface_1 = require("./AlexaInterface");
const DisplayCategory_1 = require("./DisplayCategory");
const events_1 = require("events");
const AlexaStatusMessage_1 = require("./AlexaStatusMessage");
class Device extends events_1.EventEmitter {
    constructor(mqttClient, rootTopic, name, endpointId, displayCategory, description = "Alexa to Node.js bridge", manufacturerName = "Alex2Node", manufacturer = "Alex2Node", model = "Alex2Node_v1.0.0") {
        super();
        this.mqttClient = mqttClient;
        this.rootTopic = rootTopic;
        this.name = name;
        this.endpointId = endpointId;
        this.displayCategory = displayCategory;
        this.description = description;
        this.manufacturerName = manufacturerName;
        this.manufacturer = manufacturer;
        this.model = model;
        this.softwareVersion = "1.0.0";
        this.capabilities = [];
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEndpointId() {
        return this.endpointId;
    }
    setDisplayCategory(category) {
        this.displayCategory = Array.isArray(category) ? category : [category];
    }
    getDisplayCategory() {
        return this.displayCategory || [DisplayCategory_1.DisplayCategory.LIGHT];
    }
    setDescription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    getStatusMessage(correlationToken, isResponse = false, isDeferred = false) {
        return new AlexaStatusMessage_1.AlexaStatusMessage(correlationToken, this.rootTopic, this.endpointId, this.mqttClient, isResponse, isDeferred);
    }
    setManufacturerName(name) {
        this.manufacturerName = name;
    }
    getManufacturerName() {
        return this.manufacturerName;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setModel(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    getSoftwareVersion() {
        return this.softwareVersion;
    }
    addCapability(type) {
        const existing = this.capabilities.find((iface) => iface.getType() === type);
        if (existing) {
            return existing;
        }
        const newCapability = new AlexaInterface_1.AlexaInterface(type);
        this.capabilities.push(newCapability);
        // console.log(
        //   `Created new interface with type: ${newCapability.getTypeString()}`
        // );
        return newCapability;
    }
    getJSON() {
        return {
            endpointId: this.endpointId,
            friendlyName: this.name,
            description: this.description,
            manufacturerName: this.manufacturerName,
            displayCategories: this.getDisplayCategory(),
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
exports.default = Device;
