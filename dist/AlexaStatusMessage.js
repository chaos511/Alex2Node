"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaStatusMessage = exports.TemperatureSensorScale = exports.PowerController = exports.EndpointHealth = void 0;
const uuid_1 = require("uuid");
const AlexaInterface_1 = require("./AlexaInterface");
var EndpointHealth;
(function (EndpointHealth) {
    EndpointHealth["OK"] = "OK";
    EndpointHealth["UNREACHABLE"] = "UNREACHABLE";
})(EndpointHealth || (exports.EndpointHealth = EndpointHealth = {}));
var PowerController;
(function (PowerController) {
    PowerController["ON"] = "ON";
    PowerController["OFF"] = "OFF";
})(PowerController || (exports.PowerController = PowerController = {}));
var TemperatureSensorScale;
(function (TemperatureSensorScale) {
    TemperatureSensorScale["CELSIUS"] = "CELSIUS";
    TemperatureSensorScale["FAHRENHEIT"] = "FAHRENHEIT";
})(TemperatureSensorScale || (exports.TemperatureSensorScale = TemperatureSensorScale = {}));
class AlexaStatusMessage {
    constructor(correlationToken, rootTopic, endpointId, mqttClient, isResponse = false) {
        this.context = { properties: [] };
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
    generateMessageId() {
        return (0, uuid_1.v4)();
    }
    getTimestamp() {
        return new Date().toISOString();
    }
    addProperty(namespace, name, value, uncertaintyInMilliseconds = 0, instance) {
        const prop = {
            namespace,
            name,
            value,
            timeOfSample: this.getTimestamp(),
            uncertaintyInMilliseconds,
        };
        if (instance)
            prop.instance = instance;
        this.context.properties.push(prop);
        return this;
    }
    addHealthProp(health, uncertaintyInMs = 0) {
        return this.addProperty(AlexaInterface_1.AlexaInterfaceType.ENDPOINT_HEALTH, "connectivity", { value: health }, uncertaintyInMs);
    }
    addPowerControllerProp(power, uncertaintyInMs = 0) {
        return this.addProperty(AlexaInterface_1.AlexaInterfaceType.POWER_CONTROLLER, "powerState", power, uncertaintyInMs);
    }
    addTemperatureSensorProp(scale, value, uncertaintyInMs = 0) {
        const tempValue = {
            value: scale === TemperatureSensorScale.FAHRENHEIT
                ? (value - 32) * (5 / 9)
                : value,
            scale: "CELSIUS",
        };
        return this.addProperty(AlexaInterface_1.AlexaInterfaceType.TEMPERATURE_SENSOR, "temperature", tempValue, uncertaintyInMs);
    }
    addBrightnessControllerProp(brightness, uncertaintyInMs = 0) {
        return this.addProperty(AlexaInterface_1.AlexaInterfaceType.BRIGHTNESS_CONTROLLER, "brightness", brightness, uncertaintyInMs);
    }
    addColorTemperatureControllerProp(colorTemp, uncertaintyInMs = 0) {
        return this.addProperty(AlexaInterface_1.AlexaInterfaceType.COLOR_TEMPERATURE_CONTROLLER, "colorTemperatureInKelvin", colorTemp, uncertaintyInMs);
    }
    addToggleControllerProp(state, instance, uncertaintyInMs = 0) {
        return this.addProperty(AlexaInterface_1.AlexaInterfaceType.TOGGLE_CONTROLLER, "toggleState", state, uncertaintyInMs, instance);
    }
    addContextProp(prop) {
        this.context.properties.push(prop);
        return this;
    }
    send() {
        const payload = {
            context: this.context,
            event: this.event,
        };
        const topic = `${this.rootTopic}/${this.endpointId}/alexaResponce`; //Yes this should be response but it is incorrect in both Alex2MQTT and Alex2ESP so for consistency is is wrong here too
        const payloadStr = JSON.stringify(payload);
        this.mqttClient.publish(topic, payloadStr, (err) => {
            if (err) {
                console.error("[AlexaStatusMessage] Failed to publish status message:", err);
            }
            else {
                // console.log(`[AlexaStatusMessage] Sent message to ${topic}`);
            }
        });
    }
}
exports.AlexaStatusMessage = AlexaStatusMessage;
