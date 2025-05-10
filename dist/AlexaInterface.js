"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaInterface = exports.AlexaInterfaceType = void 0;
var AlexaInterfaceType;
(function (AlexaInterfaceType) {
    AlexaInterfaceType["APPLICATION_STATE_REPORTER"] = "Alexa.ApplicationStateReporter";
    AlexaInterfaceType["AUDIO_PLAY_QUEUE"] = "Alexa.Audio.PlayQueue";
    AlexaInterfaceType["AUTHORIZATION_CONTROLLER"] = "Alexa.AuthorizationController";
    AlexaInterfaceType["AUTOMATION_MANAGEMENT"] = "Alexa.AutomationManagement";
    AlexaInterfaceType["AUTOMOTIVE_VEHICLE_DATA"] = "Alexa.Automotive.VehicleData";
    AlexaInterfaceType["BRIGHTNESS_CONTROLLER"] = "Alexa.BrightnessController";
    AlexaInterfaceType["CAMERA_LIVE_VIEW_CONTROLLER"] = "Alexa.Camera.LiveViewController";
    AlexaInterfaceType["CAMERA_STREAM_CONTROLLER"] = "Alexa.CameraStreamController";
    AlexaInterfaceType["CHANNEL_CONTROLLER"] = "Alexa.ChannelController";
    AlexaInterfaceType["COLOR_CONTROLLER"] = "Alexa.ColorController";
    AlexaInterfaceType["COLOR_TEMPERATURE_CONTROLLER"] = "Alexa.ColorTemperatureController";
    AlexaInterfaceType["COMMISSIONABLE"] = "Alexa.Commissionable";
    AlexaInterfaceType["CONSENT_MANAGEMENT_CONSENT_REQUIRED_REPORTER"] = "Alexa.ConsentManagement.ConsentRequiredReporter";
    AlexaInterfaceType["CONTACT_SENSOR"] = "Alexa.ContactSensor";
    AlexaInterfaceType["COOKING"] = "Alexa.Cooking";
    AlexaInterfaceType["COOKING_FOOD_TEMPERATURE_CONTROLLER"] = "Alexa.Cooking.FoodTemperatureController";
    AlexaInterfaceType["COOKING_FOOD_TEMPERATURE_SENSOR"] = "Alexa.Cooking.FoodTemperatureSensor";
    AlexaInterfaceType["COOKING_PRESET_CONTROLLER"] = "Alexa.Cooking.PresetController";
    AlexaInterfaceType["COOKING_TEMPERATURE_CONTROLLER"] = "Alexa.Cooking.TemperatureController";
    AlexaInterfaceType["COOKING_TEMPERATURE_SENSOR"] = "Alexa.Cooking.TemperatureSensor";
    AlexaInterfaceType["COOKING_TIME_CONTROLLER"] = "Alexa.Cooking.TimeController";
    AlexaInterfaceType["DATA_CONTROLLER"] = "Alexa.DataController";
    AlexaInterfaceType["DEVICE_USAGE_ESTIMATION"] = "Alexa.DeviceUsage.Estimation";
    AlexaInterfaceType["DEVICE_USAGE_METER"] = "Alexa.DeviceUsage.Meter";
    AlexaInterfaceType["DOORBELL_EVENT_SOURCE"] = "Alexa.DoorbellEventSource";
    AlexaInterfaceType["ENDPOINT_HEALTH"] = "Alexa.EndpointHealth";
    AlexaInterfaceType["EQUALIZER_CONTROLLER"] = "Alexa.EqualizerController";
    AlexaInterfaceType["INPUT_CONTROLLER"] = "Alexa.InputController";
    AlexaInterfaceType["INVENTORY_LEVEL_SENSOR"] = "Alexa.InventoryLevelSensor";
    AlexaInterfaceType["INVENTORY_LEVEL_USAGE_SENSOR"] = "Alexa.InventoryLevelUsageSensor";
    AlexaInterfaceType["INVENTORY_USAGE_SENSOR"] = "Alexa.InventoryUsageSensor";
    AlexaInterfaceType["KEYPAD_CONTROLLER"] = "Alexa.KeypadController";
    AlexaInterfaceType["LAUNCHER"] = "Alexa.Launcher";
    AlexaInterfaceType["LOCK_CONTROLLER"] = "Alexa.LockController";
    AlexaInterfaceType["MEDIA_PLAYBACK"] = "Alexa.Media.Playback";
    AlexaInterfaceType["MEDIA_PLAY_QUEUE"] = "Alexa.Media.PlayQueue";
    AlexaInterfaceType["MEDIA_SEARCH"] = "Alexa.Media.Search";
    AlexaInterfaceType["MODE_CONTROLLER"] = "Alexa.ModeController";
    AlexaInterfaceType["MOTION_SENSOR"] = "Alexa.MotionSensor";
    AlexaInterfaceType["PERCENTAGE_CONTROLLER"] = "Alexa.PercentageController";
    AlexaInterfaceType["PLAYBACK_CONTROLLER"] = "Alexa.PlaybackController";
    AlexaInterfaceType["PLAYBACK_STATE_REPORTER"] = "Alexa.PlaybackStateReporter";
    AlexaInterfaceType["POWER_CONTROLLER"] = "Alexa.PowerController";
    AlexaInterfaceType["POWER_LEVEL_CONTROLLER"] = "Alexa.PowerLevelController";
    AlexaInterfaceType["PROACTIVE_NOTIFICATION_SOURCE"] = "Alexa.ProactiveNotificationSource";
    AlexaInterfaceType["RANGE_CONTROLLER"] = "Alexa.RangeController";
    AlexaInterfaceType["RECORD_CONTROLLER"] = "Alexa.RecordController";
    AlexaInterfaceType["REMOTE_VIDEO_PLAYER"] = "Alexa.RemoteVideoPlayer";
    AlexaInterfaceType["RTC_SESSION_CONTROLLER"] = "Alexa.RTCSessionController";
    AlexaInterfaceType["SCENE_CONTROLLER"] = "Alexa.SceneController";
    AlexaInterfaceType["SECURITY_PANEL_CONTROLLER"] = "Alexa.SecurityPanelController";
    AlexaInterfaceType["SECURITY_PANEL_CONTROLLER_ALERT"] = "Alexa.SecurityPanelController.Alert";
    AlexaInterfaceType["SEEK_CONTROLLER"] = "Alexa.SeekController";
    AlexaInterfaceType["SIMPLE_EVENT_SOURCE"] = "Alexa.SimpleEventSource";
    AlexaInterfaceType["SMART_VISION_OBJECT_DETECTION_SENSOR"] = "Alexa.SmartVision.ObjectDetectionSensor";
    AlexaInterfaceType["SMART_VISION_SNAPSHOT_PROVIDER"] = "Alexa.SmartVision.SnapshotProvider";
    AlexaInterfaceType["SPEAKER"] = "Alexa.Speaker";
    AlexaInterfaceType["STEP_SPEAKER"] = "Alexa.StepSpeaker";
    AlexaInterfaceType["TEMPERATURE_SENSOR"] = "Alexa.TemperatureSensor";
    AlexaInterfaceType["THERMOSTAT_CONTROLLER"] = "Alexa.ThermostatController";
    AlexaInterfaceType["THERMOSTAT_CONTROLLER_CONFIGURATION"] = "Alexa.ThermostatController.Configuration";
    AlexaInterfaceType["THERMOSTAT_CONTROLLER_HVAC_COMPONENTS"] = "Alexa.ThermostatController.HVAC.Components";
    AlexaInterfaceType["THERMOSTAT_CONTROLLER_SCHEDULE"] = "Alexa.ThermostatController.Schedule";
    AlexaInterfaceType["TIME_HOLD_CONTROLLER"] = "Alexa.TimeHoldController";
    AlexaInterfaceType["TOGGLE_CONTROLLER"] = "Alexa.ToggleController";
    AlexaInterfaceType["UI_CONTROLLER"] = "Alexa.UIController";
    AlexaInterfaceType["USER_PREFERENCE"] = "Alexa.UserPreference";
    AlexaInterfaceType["VIDEO_RECORDER"] = "Alexa.VideoRecorder";
    AlexaInterfaceType["WAKE_ON_LAN_CONTROLLER"] = "Alexa.WakeOnLANController";
    AlexaInterfaceType["UNKNOWN"] = "UNKNOWN";
})(AlexaInterfaceType || (exports.AlexaInterfaceType = AlexaInterfaceType = {}));
class AlexaInterface {
    constructor(type, retrievable = true, proactivelyReported = false, instance = "") {
        this.type = type;
        this.retrievable = retrievable;
        this.proactivelyReported = proactivelyReported;
        this.instance = instance;
        this.friendlyNames = [];
        this.actionMappings = [];
    }
    addActionMapping(mapping) {
        this.actionMappings.push(mapping);
    }
    addFriendlyName(name, locale) {
        this.friendlyNames.push({ text: name, locale });
    }
    setInstance(name) {
        this.instance = name;
    }
    getType() {
        return this.type;
    }
    getTypeString() {
        return this.type;
    }
    getVersion() {
        switch (this.type) {
            case AlexaInterfaceType.APPLICATION_STATE_REPORTER:
            case AlexaInterfaceType.AUDIO_PLAY_QUEUE:
            case AlexaInterfaceType.AUTHORIZATION_CONTROLLER:
            case AlexaInterfaceType.AUTOMATION_MANAGEMENT:
            case AlexaInterfaceType.AUTOMOTIVE_VEHICLE_DATA:
            case AlexaInterfaceType.COMMISSIONABLE:
            case AlexaInterfaceType.CONSENT_MANAGEMENT_CONSENT_REQUIRED_REPORTER:
            case AlexaInterfaceType.COOKING:
            case AlexaInterfaceType.COOKING_FOOD_TEMPERATURE_CONTROLLER:
            case AlexaInterfaceType.COOKING_FOOD_TEMPERATURE_SENSOR:
            case AlexaInterfaceType.COOKING_PRESET_CONTROLLER:
            case AlexaInterfaceType.COOKING_TEMPERATURE_CONTROLLER:
            case AlexaInterfaceType.COOKING_TEMPERATURE_SENSOR:
            case AlexaInterfaceType.COOKING_TIME_CONTROLLER:
            case AlexaInterfaceType.DATA_CONTROLLER:
            case AlexaInterfaceType.DEVICE_USAGE_ESTIMATION:
            case AlexaInterfaceType.DEVICE_USAGE_METER:
            case AlexaInterfaceType.EQUALIZER_CONTROLLER:
            case AlexaInterfaceType.INVENTORY_LEVEL_SENSOR:
            case AlexaInterfaceType.INVENTORY_LEVEL_USAGE_SENSOR:
            case AlexaInterfaceType.INVENTORY_USAGE_SENSOR:
            case AlexaInterfaceType.KEYPAD_CONTROLLER:
            case AlexaInterfaceType.MEDIA_PLAYBACK:
            case AlexaInterfaceType.MEDIA_PLAY_QUEUE:
            case AlexaInterfaceType.MEDIA_SEARCH:
            case AlexaInterfaceType.PLAYBACK_STATE_REPORTER:
            case AlexaInterfaceType.PROACTIVE_NOTIFICATION_SOURCE:
            case AlexaInterfaceType.REMOTE_VIDEO_PLAYER:
            case AlexaInterfaceType.RTC_SESSION_CONTROLLER:
            case AlexaInterfaceType.SECURITY_PANEL_CONTROLLER:
            case AlexaInterfaceType.SECURITY_PANEL_CONTROLLER_ALERT:
            case AlexaInterfaceType.SIMPLE_EVENT_SOURCE:
            case AlexaInterfaceType.SMART_VISION_OBJECT_DETECTION_SENSOR:
            case AlexaInterfaceType.SMART_VISION_SNAPSHOT_PROVIDER:
            case AlexaInterfaceType.SPEAKER:
            case AlexaInterfaceType.STEP_SPEAKER:
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER_CONFIGURATION:
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER_HVAC_COMPONENTS:
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER_SCHEDULE:
            case AlexaInterfaceType.UI_CONTROLLER:
            case AlexaInterfaceType.USER_PREFERENCE:
            case AlexaInterfaceType.VIDEO_RECORDER:
            case AlexaInterfaceType.WAKE_ON_LAN_CONTROLLER:
                return "1";
            case AlexaInterfaceType.BRIGHTNESS_CONTROLLER:
            case AlexaInterfaceType.CAMERA_STREAM_CONTROLLER:
            case AlexaInterfaceType.CHANNEL_CONTROLLER:
            case AlexaInterfaceType.COLOR_CONTROLLER:
            case AlexaInterfaceType.COLOR_TEMPERATURE_CONTROLLER:
            case AlexaInterfaceType.CONTACT_SENSOR:
            case AlexaInterfaceType.DOORBELL_EVENT_SOURCE:
            case AlexaInterfaceType.INPUT_CONTROLLER:
            case AlexaInterfaceType.LOCK_CONTROLLER:
            case AlexaInterfaceType.MODE_CONTROLLER:
            case AlexaInterfaceType.MOTION_SENSOR:
            case AlexaInterfaceType.PERCENTAGE_CONTROLLER:
            case AlexaInterfaceType.PLAYBACK_CONTROLLER:
            case AlexaInterfaceType.POWER_CONTROLLER:
            case AlexaInterfaceType.POWER_LEVEL_CONTROLLER:
            case AlexaInterfaceType.RANGE_CONTROLLER:
            case AlexaInterfaceType.RECORD_CONTROLLER:
            case AlexaInterfaceType.SCENE_CONTROLLER:
            case AlexaInterfaceType.SEEK_CONTROLLER:
            case AlexaInterfaceType.TEMPERATURE_SENSOR:
            case AlexaInterfaceType.TOGGLE_CONTROLLER:
                return "3";
            case AlexaInterfaceType.LAUNCHER:
                return "1.1";
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER:
                return "3.2";
            case AlexaInterfaceType.ENDPOINT_HEALTH:
                return "3.3";
            default:
                return "UNKNOWN";
        }
    }
    getProps() {
        switch (this.type) {
            case AlexaInterfaceType.AUTOMATION_MANAGEMENT:
                return ["automationStatuses"];
            case AlexaInterfaceType.BRIGHTNESS_CONTROLLER:
                return ["brightness"];
            case AlexaInterfaceType.CHANNEL_CONTROLLER:
                return ["channel"];
            case AlexaInterfaceType.COLOR_CONTROLLER:
                return ["color"];
            case AlexaInterfaceType.COLOR_TEMPERATURE_CONTROLLER:
                return ["colorTemperatureInKelvin"];
            case AlexaInterfaceType.CONTACT_SENSOR:
                return ["detectionState"];
            case AlexaInterfaceType.POWER_CONTROLLER:
                return ["powerState"];
            case AlexaInterfaceType.ENDPOINT_HEALTH:
                return ["connectivity"];
            case AlexaInterfaceType.TOGGLE_CONTROLLER:
                return ["toggleState"];
            case AlexaInterfaceType.TEMPERATURE_SENSOR:
                return ["temperature"];
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER:
                return [
                    "lowerSetpoint",
                    "upperSetpoint",
                    "thermostatMode",
                    "adaptiveRecoveryStatus",
                ];
            case AlexaInterfaceType.APPLICATION_STATE_REPORTER:
            case AlexaInterfaceType.AUDIO_PLAY_QUEUE:
            case AlexaInterfaceType.AUTHORIZATION_CONTROLLER:
            case AlexaInterfaceType.AUTOMOTIVE_VEHICLE_DATA:
            case AlexaInterfaceType.CAMERA_LIVE_VIEW_CONTROLLER:
            case AlexaInterfaceType.CAMERA_STREAM_CONTROLLER:
            case AlexaInterfaceType.COMMISSIONABLE:
            case AlexaInterfaceType.CONSENT_MANAGEMENT_CONSENT_REQUIRED_REPORTER:
            case AlexaInterfaceType.COOKING:
            case AlexaInterfaceType.DATA_CONTROLLER:
            case AlexaInterfaceType.DEVICE_USAGE_ESTIMATION:
            case AlexaInterfaceType.DEVICE_USAGE_METER:
            case AlexaInterfaceType.DOORBELL_EVENT_SOURCE:
            case AlexaInterfaceType.EQUALIZER_CONTROLLER:
            case AlexaInterfaceType.INPUT_CONTROLLER:
            case AlexaInterfaceType.INVENTORY_LEVEL_SENSOR:
            case AlexaInterfaceType.INVENTORY_LEVEL_USAGE_SENSOR:
            case AlexaInterfaceType.INVENTORY_USAGE_SENSOR:
            case AlexaInterfaceType.KEYPAD_CONTROLLER:
            case AlexaInterfaceType.LAUNCHER:
            case AlexaInterfaceType.LOCK_CONTROLLER:
            case AlexaInterfaceType.MEDIA_PLAYBACK:
            case AlexaInterfaceType.MEDIA_SEARCH:
            case AlexaInterfaceType.MODE_CONTROLLER:
            case AlexaInterfaceType.MOTION_SENSOR:
            case AlexaInterfaceType.PERCENTAGE_CONTROLLER:
            case AlexaInterfaceType.PLAYBACK_CONTROLLER:
            case AlexaInterfaceType.PLAYBACK_STATE_REPORTER:
            case AlexaInterfaceType.PROACTIVE_NOTIFICATION_SOURCE:
            case AlexaInterfaceType.RANGE_CONTROLLER:
            case AlexaInterfaceType.RECORD_CONTROLLER:
            case AlexaInterfaceType.REMOTE_VIDEO_PLAYER:
            case AlexaInterfaceType.RTC_SESSION_CONTROLLER:
            case AlexaInterfaceType.SCENE_CONTROLLER:
            case AlexaInterfaceType.SECURITY_PANEL_CONTROLLER:
            case AlexaInterfaceType.SEEK_CONTROLLER:
            case AlexaInterfaceType.SIMPLE_EVENT_SOURCE:
            case AlexaInterfaceType.SMART_VISION_OBJECT_DETECTION_SENSOR:
            case AlexaInterfaceType.SMART_VISION_SNAPSHOT_PROVIDER:
            case AlexaInterfaceType.SPEAKER:
            case AlexaInterfaceType.STEP_SPEAKER:
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER_CONFIGURATION:
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER_HVAC_COMPONENTS:
            case AlexaInterfaceType.THERMOSTAT_CONTROLLER_SCHEDULE:
            case AlexaInterfaceType.TIME_HOLD_CONTROLLER:
            case AlexaInterfaceType.UI_CONTROLLER:
            case AlexaInterfaceType.USER_PREFERENCE:
            case AlexaInterfaceType.VIDEO_RECORDER:
            case AlexaInterfaceType.WAKE_ON_LAN_CONTROLLER:
                console.error("UNSUPORTED INTERFACE TYPE");
                return [];
            default:
                return [];
        }
    }
    getJSON() {
        const doc = {
            interface: this.getTypeString(),
            version: this.getVersion(),
            type: "AlexaInterface",
            properties: {
                retrievable: this.retrievable,
                proactivelyReported: this.proactivelyReported,
                supported: this.getProps().map(name => ({ name })),
            },
        };
        if (this.type == AlexaInterfaceType.THERMOSTAT_CONTROLLER) {
            doc.configuration = {
                "supportedModes": ["HEAT", "COOL", "AUTO", "OFF"],
                "supportsScheduling": false
            };
        }
        if (this.instance) {
            doc.instance = this.instance;
        }
        if (this.friendlyNames.length > 0) {
            const capabilityResources = doc["capabilityResources"] || {};
            const friendlyNamesArray = capabilityResources["friendlyNames"] || [];
            this.friendlyNames.forEach((fn) => {
                const friendlyNameObj = { "@type": "text" };
                friendlyNameObj["value"] = {
                    text: fn.text,
                    locale: fn.locale,
                };
                friendlyNamesArray.push(friendlyNameObj);
            });
            doc["capabilityResources"] = capabilityResources;
        }
        if (this.actionMappings.length > 0) {
            doc.semantics = {
                actionMappings: this.actionMappings.map((am) => am.toJSON()),
            };
        }
        return doc;
    }
}
exports.AlexaInterface = AlexaInterface;
