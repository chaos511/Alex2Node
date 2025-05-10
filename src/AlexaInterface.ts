import { ActionMapping, AlexaActions } from "./ActionMapping";

export enum AlexaInterfaceType {
  APPLICATION_STATE_REPORTER = "Alexa.ApplicationStateReporter",
  AUDIO_PLAY_QUEUE = "Alexa.Audio.PlayQueue",
  AUTHORIZATION_CONTROLLER = "Alexa.AuthorizationController",
  AUTOMATION_MANAGEMENT = "Alexa.AutomationManagement",
  AUTOMOTIVE_VEHICLE_DATA = "Alexa.Automotive.VehicleData",
  BRIGHTNESS_CONTROLLER = "Alexa.BrightnessController",
  CAMERA_LIVE_VIEW_CONTROLLER = "Alexa.Camera.LiveViewController",
  CAMERA_STREAM_CONTROLLER = "Alexa.CameraStreamController",
  CHANNEL_CONTROLLER = "Alexa.ChannelController",
  COLOR_CONTROLLER = "Alexa.ColorController",
  COLOR_TEMPERATURE_CONTROLLER = "Alexa.ColorTemperatureController",
  COMMISSIONABLE = "Alexa.Commissionable",
  CONSENT_MANAGEMENT_CONSENT_REQUIRED_REPORTER = "Alexa.ConsentManagement.ConsentRequiredReporter",
  CONTACT_SENSOR = "Alexa.ContactSensor",
  COOKING = "Alexa.Cooking",
  COOKING_FOOD_TEMPERATURE_CONTROLLER = "Alexa.Cooking.FoodTemperatureController",
  COOKING_FOOD_TEMPERATURE_SENSOR = "Alexa.Cooking.FoodTemperatureSensor",
  COOKING_PRESET_CONTROLLER = "Alexa.Cooking.PresetController",
  COOKING_TEMPERATURE_CONTROLLER = "Alexa.Cooking.TemperatureController",
  COOKING_TEMPERATURE_SENSOR = "Alexa.Cooking.TemperatureSensor",
  COOKING_TIME_CONTROLLER = "Alexa.Cooking.TimeController",
  DATA_CONTROLLER = "Alexa.DataController",
  DEVICE_USAGE_ESTIMATION = "Alexa.DeviceUsage.Estimation",
  DEVICE_USAGE_METER = "Alexa.DeviceUsage.Meter",
  DOORBELL_EVENT_SOURCE = "Alexa.DoorbellEventSource",
  ENDPOINT_HEALTH = "Alexa.EndpointHealth",
  EQUALIZER_CONTROLLER = "Alexa.EqualizerController",
  INPUT_CONTROLLER = "Alexa.InputController",
  INVENTORY_LEVEL_SENSOR = "Alexa.InventoryLevelSensor",
  INVENTORY_LEVEL_USAGE_SENSOR = "Alexa.InventoryLevelUsageSensor",
  INVENTORY_USAGE_SENSOR = "Alexa.InventoryUsageSensor",
  KEYPAD_CONTROLLER = "Alexa.KeypadController",
  LAUNCHER = "Alexa.Launcher",
  LOCK_CONTROLLER = "Alexa.LockController",
  MEDIA_PLAYBACK = "Alexa.Media.Playback",
  MEDIA_PLAY_QUEUE = "Alexa.Media.PlayQueue",
  MEDIA_SEARCH = "Alexa.Media.Search",
  MODE_CONTROLLER = "Alexa.ModeController",
  MOTION_SENSOR = "Alexa.MotionSensor",
  PERCENTAGE_CONTROLLER = "Alexa.PercentageController",
  PLAYBACK_CONTROLLER = "Alexa.PlaybackController",
  PLAYBACK_STATE_REPORTER = "Alexa.PlaybackStateReporter",
  POWER_CONTROLLER = "Alexa.PowerController",
  POWER_LEVEL_CONTROLLER = "Alexa.PowerLevelController",
  PROACTIVE_NOTIFICATION_SOURCE = "Alexa.ProactiveNotificationSource",
  RANGE_CONTROLLER = "Alexa.RangeController",
  RECORD_CONTROLLER = "Alexa.RecordController",
  REMOTE_VIDEO_PLAYER = "Alexa.RemoteVideoPlayer",
  RTC_SESSION_CONTROLLER = "Alexa.RTCSessionController",
  SCENE_CONTROLLER = "Alexa.SceneController",
  SECURITY_PANEL_CONTROLLER = "Alexa.SecurityPanelController",
  SECURITY_PANEL_CONTROLLER_ALERT = "Alexa.SecurityPanelController.Alert",
  SEEK_CONTROLLER = "Alexa.SeekController",
  SIMPLE_EVENT_SOURCE = "Alexa.SimpleEventSource",
  SMART_VISION_OBJECT_DETECTION_SENSOR = "Alexa.SmartVision.ObjectDetectionSensor",
  SMART_VISION_SNAPSHOT_PROVIDER = "Alexa.SmartVision.SnapshotProvider",
  SPEAKER = "Alexa.Speaker",
  STEP_SPEAKER = "Alexa.StepSpeaker",
  TEMPERATURE_SENSOR = "Alexa.TemperatureSensor",
  THERMOSTAT_CONTROLLER = "Alexa.ThermostatController",
  THERMOSTAT_CONTROLLER_CONFIGURATION = "Alexa.ThermostatController.Configuration",
  THERMOSTAT_CONTROLLER_HVAC_COMPONENTS = "Alexa.ThermostatController.HVAC.Components",
  THERMOSTAT_CONTROLLER_SCHEDULE = "Alexa.ThermostatController.Schedule",
  TIME_HOLD_CONTROLLER = "Alexa.TimeHoldController",
  TOGGLE_CONTROLLER = "Alexa.ToggleController",
  UI_CONTROLLER = "Alexa.UIController",
  USER_PREFERENCE = "Alexa.UserPreference",
  VIDEO_RECORDER = "Alexa.VideoRecorder",
  WAKE_ON_LAN_CONTROLLER = "Alexa.WakeOnLANController",
  UNKNOWN = "UNKNOWN",
}

interface FriendlyName {
  text: string;
  locale: string;
}

export class AlexaInterface {
  private friendlyNames: FriendlyName[] = [];
  private actionMappings: ActionMapping[] = [];

  constructor(
    public type: AlexaInterfaceType,
    public retrievable: boolean = true,
    public proactivelyReported: boolean = false,
    public instance = ""
  ) {}

  addActionMapping(mapping: ActionMapping): void {
    this.actionMappings.push(mapping);
  }

  addFriendlyName(name: string, locale: string): void {
    this.friendlyNames.push({ text: name, locale });
  }

  setInstance(name: string): void {
    this.instance = name;
  }

  getType(): AlexaInterfaceType {
    return this.type;
  }

  getTypeString(): string {
    return this.type;
  }

  getVersion(): string {
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

  getProps(): string[] {
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

  getJSON(): object {
    const doc: any = {
      interface: this.getTypeString(),
      version: this.getVersion(),
      type: "AlexaInterface",
      properties: {
        retrievable: this.retrievable,
        proactivelyReported: this.proactivelyReported,
        supported: this.getProps().map(name => ({ name })),
      },
    };
    if(this.type==AlexaInterfaceType.THERMOSTAT_CONTROLLER){
      doc.configuration={
        "supportedModes": ["HEAT", "COOL", "AUTO", "OFF"],
        "supportsScheduling": false
      }
    }
    if (this.instance) {
      doc.instance = this.instance;
    }
    if (this.friendlyNames.length > 0) {
      const capabilityResources = doc["capabilityResources"] || {};
      const friendlyNamesArray = capabilityResources["friendlyNames"] || [];
      this.friendlyNames.forEach((fn) => {
        const friendlyNameObj: any = { "@type": "text" };
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
