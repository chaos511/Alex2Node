"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaErrorResponse = exports.AlexaErrorType = void 0;
const uuid_1 = require("uuid");
var AlexaErrorType;
(function (AlexaErrorType) {
    AlexaErrorType["ALREADY_IN_OPERATION"] = "ALREADY_IN_OPERATION";
    AlexaErrorType["AUTHORIZATION_REQUIRED"] = "AUTHORIZATION_REQUIRED";
    AlexaErrorType["BRIDGE_UNREACHABLE"] = "BRIDGE_UNREACHABLE";
    AlexaErrorType["BYPASS_NEEDED"] = "BYPASS_NEEDED";
    AlexaErrorType["CLOUD_CONTROL_DISABLED"] = "CLOUD_CONTROL_DISABLED";
    AlexaErrorType["CHILD_LOCK"] = "CHILD_LOCK";
    AlexaErrorType["CONFIGURATION_UPDATE_NOT_ALLOWED"] = "CONFIGURATION_UPDATE_NOT_ALLOWED";
    AlexaErrorType["COOK_DURATION_TOO_LONG"] = "COOK_DURATION_TOO_LONG";
    AlexaErrorType["COOLING_LOCKOUT_TEMPERATURE_VALUE_OUT_OF_RANGE"] = "COOLING_LOCKOUT_TEMPERATURE_VALUE_OUT_OF_RANGE";
    AlexaErrorType["COOLING_STAGES_EXCEEDS_LIMIT"] = "COOLING_STAGES_EXCEEDS_LIMIT";
    AlexaErrorType["DATA_DELETION_NOT_SUPPORTED"] = "DATA_DELETION_NOT_SUPPORTED";
    AlexaErrorType["DATA_RETRIEVAL_NOT_SUPPORTED"] = "DATA_RETRIEVAL_NOT_SUPPORTED";
    AlexaErrorType["DEVICE_STUCK"] = "DEVICE_STUCK";
    AlexaErrorType["DISABLED_BY_USER"] = "DISABLED_BY_USER";
    AlexaErrorType["DO_NOT_DISTURB_MODE"] = "DO_NOT_DISTURB_MODE";
    AlexaErrorType["DOOR_CLOSED_TOO_LONG"] = "DOOR_CLOSED_TOO_LONG";
    AlexaErrorType["DOOR_OPEN"] = "DOOR_OPEN";
    AlexaErrorType["DUAL_SETPOINTS_UNSUPPORTED"] = "DUAL_SETPOINTS_UNSUPPORTED";
    AlexaErrorType["ENDPOINT_BUSY"] = "ENDPOINT_BUSY";
    AlexaErrorType["ENDPOINT_CONTROL_UNAVAILABLE"] = "ENDPOINT_CONTROL_UNAVAILABLE";
    AlexaErrorType["ENDPOINT_LOW_POWER"] = "ENDPOINT_LOW_POWER";
    AlexaErrorType["ENDPOINT_UNREACHABLE"] = "ENDPOINT_UNREACHABLE";
    AlexaErrorType["EXCEEDED_PIN_ATTEMPTS"] = "EXCEEDED_PIN_ATTEMPTS";
    AlexaErrorType["EXPIRED_AUTHORIZATION_CREDENTIAL"] = "EXPIRED_AUTHORIZATION_CREDENTIAL";
    AlexaErrorType["FAILED_TO_BOOTSTRAP_COMMISSIONING_PROCESS"] = "FAILED_TO_BOOTSTRAP_COMMISSIONING_PROCESS";
    AlexaErrorType["FIRMWARE_OUT_OF_DATE"] = "FIRMWARE_OUT_OF_DATE";
    AlexaErrorType["HARDWARE_MALFUNCTION"] = "HARDWARE_MALFUNCTION";
    AlexaErrorType["HEATING_LOCKOUT_TEMPERATURE_VALUE_OUT_OF_RANGE"] = "HEATING_LOCKOUT_TEMPERATURE_VALUE_OUT_OF_RANGE";
    AlexaErrorType["HEATING_STAGES_EXCEEDS_LIMIT"] = "HEATING_STAGES_EXCEEDS_LIMIT";
    AlexaErrorType["INSUFFICIENT_PERMISSIONS"] = "INSUFFICIENT_PERMISSIONS";
    AlexaErrorType["INSUFFICIENT_RESOURCE"] = "INSUFFICIENT_RESOURCE";
    AlexaErrorType["INSUFFICIENT_SPACE"] = "INSUFFICIENT_SPACE";
    AlexaErrorType["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    AlexaErrorType["INVALID_AUTHORIZATION_CREDENTIAL"] = "INVALID_AUTHORIZATION_CREDENTIAL";
    AlexaErrorType["INVALID_AUXILIARY_HEATING_SYSTEM_TYPE"] = "INVALID_AUXILIARY_HEATING_SYSTEM_TYPE";
    AlexaErrorType["INVALID_DIRECTIVE"] = "INVALID_DIRECTIVE";
    AlexaErrorType["INVALID_SYSTEM_TYPE"] = "INVALID_SYSTEM_TYPE";
    AlexaErrorType["INVALID_TARGET_STATE"] = "INVALID_TARGET_STATE";
    AlexaErrorType["INVALID_TEMPERATURE_SCALE"] = "INVALID_TEMPERATURE_SCALE";
    AlexaErrorType["INVALID_TERMINAL_CONNECTION"] = "INVALID_TERMINAL_CONNECTION";
    AlexaErrorType["INVALID_VALUE"] = "INVALID_VALUE";
    AlexaErrorType["MAINTENANCE_REQUIRED"] = "MAINTENANCE_REQUIRED";
    AlexaErrorType["MAX_COMMISSIONING_LIMIT_REACHED"] = "MAX_COMMISSIONING_LIMIT_REACHED";
    AlexaErrorType["MISSING_SETUP_INFORMATION"] = "MISSING_SETUP_INFORMATION";
    AlexaErrorType["NO_SUCH_ENDPOINT"] = "NO_SUCH_ENDPOINT";
    AlexaErrorType["NOT_CALIBRATED"] = "NOT_CALIBRATED";
    AlexaErrorType["NOT_IN_OPERATION"] = "NOT_IN_OPERATION";
    AlexaErrorType["NOT_READY"] = "NOT_READY";
    AlexaErrorType["NOT_SUPPORTED_IN_CURRENT_MODE"] = "NOT_SUPPORTED_IN_CURRENT_MODE";
    AlexaErrorType["NOT_SUPPORTED_WITH_CURRENT_BATTERY_CHARGE_STATE"] = "NOT_SUPPORTED_WITH_CURRENT_BATTERY_CHARGE_STATE";
    AlexaErrorType["OBSTACLE_DETECTED"] = "OBSTACLE_DETECTED";
    AlexaErrorType["PARTNER_APPLICATION_REDIRECTION"] = "PARTNER_APPLICATION_REDIRECTION";
    AlexaErrorType["PIN_SETUP_REQUIRED"] = "PIN_SETUP_REQUIRED";
    AlexaErrorType["POWER_LEVEL_NOT_SUPPORTED"] = "POWER_LEVEL_NOT_SUPPORTED";
    AlexaErrorType["PREHEAT_REQUIRED"] = "PREHEAT_REQUIRED";
    AlexaErrorType["PROBE_REQUIRED"] = "PROBE_REQUIRED";
    AlexaErrorType["RATE_LIMIT_EXCEEDED"] = "RATE_LIMIT_EXCEEDED";
    AlexaErrorType["REMOTE_START_NOT_SUPPORTED"] = "REMOTE_START_NOT_SUPPORTED";
    AlexaErrorType["REMOVE_PROBE"] = "REMOVE_PROBE";
    AlexaErrorType["REMOTE_START_DISABLED"] = "REMOTE_START_DISABLED";
    AlexaErrorType["REQUESTED_SETPOINTS_TOO_CLOSE"] = "REQUESTED_SETPOINTS_TOO_CLOSE";
    AlexaErrorType["SAFETY_BEAM_BREACHED"] = "SAFETY_BEAM_BREACHED";
    AlexaErrorType["SUBSCRIPTION_REQUIRED"] = "SUBSCRIPTION_REQUIRED";
    AlexaErrorType["TEMPERATURE_VALUE_OUT_OF_RANGE"] = "TEMPERATURE_VALUE_OUT_OF_RANGE";
    AlexaErrorType["THERMOSTAT_IS_OFF"] = "THERMOSTAT_IS_OFF";
    AlexaErrorType["TOO_MANY_FAILED_ATTEMPTS"] = "TOO_MANY_FAILED_ATTEMPTS";
    AlexaErrorType["TRIPLE_SETPOINTS_UNSUPPORTED"] = "TRIPLE_SETPOINTS_UNSUPPORTED";
    AlexaErrorType["UNABLE_TO_CHARGE"] = "UNABLE_TO_CHARGE";
    AlexaErrorType["UNAUTHORIZED"] = "UNAUTHORIZED";
    AlexaErrorType["UNCLEARED_ALARM"] = "UNCLEARED_ALARM";
    AlexaErrorType["UNSUPPORTED_THERMOSTAT_MODE"] = "UNSUPPORTED_THERMOSTAT_MODE";
    AlexaErrorType["UNCLEARED_TROUBLE"] = "UNCLEARED_TROUBLE";
    AlexaErrorType["UNWILLING_TO_SET_SCHEDULE"] = "UNWILLING_TO_SET_SCHEDULE";
    AlexaErrorType["UNWILLING_TO_SET_VALUE"] = "UNWILLING_TO_SET_VALUE";
    AlexaErrorType["VALUE_OUT_OF_RANGE"] = "VALUE_OUT_OF_RANGE";
})(AlexaErrorType || (exports.AlexaErrorType = AlexaErrorType = {}));
class AlexaErrorResponse {
    constructor(correlationToken, rootTopic, endpointId, mqttClient) {
        this.rootTopic = rootTopic;
        this.endpointId = endpointId;
        this.mqttClient = mqttClient;
        this.event = {
            header: {
                namespace: "Alexa",
                name: "ErrorResponse",
                messageId: this.generateMessageId(),
                correlationToken,
                payloadVersion: "3",
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
    setErrorMessage(type, message, otherParams = {}) {
        this.event.payload = Object.assign({ type,
            message }, otherParams);
    }
    send(sendAsync = false) {
        const payload = {
            event: this.event,
        };
        const topic = `${this.rootTopic}/${this.endpointId}/${sendAsync ? "deferredResponse" : "alexaResponce"}`; //Yes this should be response but it is incorrect in both Alex2MQTT and Alex2ESP so for consistency is is wrong here too
        const payloadStr = JSON.stringify(payload);
        this.mqttClient.publish(topic, payloadStr, (err) => {
            if (err) {
                console.error("[AlexaErrorResponse] Failed to publish status message:", err);
            }
            else {
                console.log(`[AlexaErrorResponse] Sent message to ${topic}`);
            }
        });
    }
}
exports.AlexaErrorResponse = AlexaErrorResponse;
