# Alex2Node

Alex2Node is a lightweight Node.js library for integrating devices with Amazon Alexa smart home APIs using MQTT. The library simplifies the process of creating Alexa-compatible devices using Alex2MQTT instead of an Alexa Skill directly.

For more details on how to configure Alex2MQTT, visit [Alex2MQTT Documentation](https://alex2mqtt.stormysdream.club/).

---

## Features
- Supports "All" Alexa smart home capabilities.
- Simplifies Alexa device integration with MQTT.
- Event-driven architecture for handling Alexa directives.
- Easily configure devices and their capabilities via simple API.


## Quick Start

### Installation

You can install **Alex2Node** via npm:

```bash
npm install alex2node
```

Then, import it into your JavaScript or TypeScript file:

```js
const { Alex2MQTT, AlexaInterfaceType, PowerController } = require('alex2node');
```

Make sure to include your MQTT connection credentials via a `.env` file or directly in the code.

Credentials can be found at https://alex2mqtt.stormysdream.club/ after logging in with amazon.

---

## Creating a Basic Device

### Example: Power Control for a Light

Here’s how to create a simple device that controls a light:

First, create an instance of the Alexa-to-MQTT client and initialize it with your MQTT credentials:

```js
require("dotenv").config(); // Load environment variables from .env file

const { Alex2MQTT, AlexaInterfaceType, PowerController } = require("alex2node");

const username = process.env.MQTT_USERNAME;
const password = process.env.MQTT_PASSWORD;
const rootTopic = process.env.MQTT_ROOT_TOPIC;

const alex2NodeClient = new Alex2MQTT(username, password, rootTopic, false);
alex2NodeClient.connect(); // Connect to the MQTT broker
```

Once initialized, you can begin to add virtual devices. In this example, we will add a PowerController for a light:

```js
const deviceName = "Bedroom Light";
const bedroomLight = alex2NodeClient.registerDevice(deviceName, "endpoint1");

// Add the PowerController capability
bedroomLight.addCapability(AlexaInterfaceType.POWER_CONTROLLER);

// Handle Alexa's ReportState directive to report the current state
let outputState = PowerController.OFF;
bedroomLight.on("ReportState", (payload) => {
  const { correlationToken } = payload;
  const status = bedroomLight.getStatusMessage(correlationToken);
  status
    .addHealthProp("OK")
    .addPowerControllerProp(outputState)
    .send();
});

// Handle Alexa's Event directive to process state changes
bedroomLight.on("Event", (directive, interfaceType) => {
  if (interfaceType === AlexaInterfaceType.POWER_CONTROLLER) {
    const name = directive.header.name;
    const token = directive.header.correlationToken;

    if (name === "TurnOn") {
      outputState = PowerController.ON;
      console.log("Turning ON the Bedroom Light");
    } else if (name === "TurnOff") {
      outputState = PowerController.OFF;
      console.log("Turning OFF the Bedroom Light");
    }

    const status = bedroomLight.getStatusMessage(token, true);
    status
      .addHealthProp("OK")
      .addPowerControllerProp(outputState)
      .send();
  }
});
```

---

## Interface Types
| Alexa Interface Type                                 | Status      |
|-----------------------------------------------------|-------------|
| AlexaInterfaceType::ENDPOINT_HEALTH                 | Fully Supported  |
| AlexaInterfaceType::POWER_CONTROLLER                | Fully Supported  |
| AlexaInterfaceType::BRIGHTNESS_CONTROLLER           | Fully Supported  |
| AlexaInterfaceType::TOGGLE_CONTROLLER               | Fully Supported  |
| AlexaInterfaceType::TEMPERATURE_SENSOR              | Fully Supported  |
| AlexaInterfaceType::COLOR_TEMPERATURE_CONTROLLER    | Fully Supported  |
| AlexaInterfaceType::AUTOMATION_MANAGEMENT           | Supported*  |
| AlexaInterfaceType::CHANNEL_CONTROLLER              | Supported*  |
| AlexaInterfaceType::COLOR_CONTROLLER                | Supported*  |
| AlexaInterfaceType::CONTACT_SENSOR                  | Supported*  |
| AlexaInterfaceType::APPLICATION_STATE_REPORTER      | Supported*  |
| AlexaInterfaceType::AUDIO_PLAY_QUEUE                | Supported*  |
| AlexaInterfaceType::AUTHORIZATION_CONTROLLER        | Supported*  |
| AlexaInterfaceType::AUTOMOTIVE_VEHICLE_DATA         | Supported*  |
| AlexaInterfaceType::CAMERA_LIVE_VIEW_CONTROLLER     | Supported*  |
| AlexaInterfaceType::CAMERA_STREAM_CONTROLLER        | Supported*  |
| AlexaInterfaceType::COMMISSIONABLE                  | Supported*  |
| AlexaInterfaceType::CONSENT_MANAGEMENT_CONSENT_REQUIRED_REPORTER | Supported* |
| AlexaInterfaceType::COOKING                         | Supported*  |
| AlexaInterfaceType::DATA_CONTROLLER                 | Supported*  |
| AlexaInterfaceType::DEVICE_USAGE_ESTIMATION         | Supported*  |
| AlexaInterfaceType::DEVICE_USAGE_METER              | Supported*  |
| AlexaInterfaceType::DOORBELL_EVENT_SOURCE           | Supported*  |
| AlexaInterfaceType::EQUALIZER_CONTROLLER            | Supported*  |
| AlexaInterfaceType::INPUT_CONTROLLER                | Supported*  |
| AlexaInterfaceType::INVENTORY_LEVEL_SENSOR          | Supported*  |
| AlexaInterfaceType::INVENTORY_LEVEL_USAGE_SENSOR    | Supported*  |
| AlexaInterfaceType::INVENTORY_USAGE_SENSOR          | Supported*  |
| AlexaInterfaceType::KEYPAD_CONTROLLER               | Supported*  |
| AlexaInterfaceType::LAUNCHER                        | Supported*  |
| AlexaInterfaceType::LOCK_CONTROLLER                 | Supported*  |
| AlexaInterfaceType::MEDIA_PLAYBACK                  | Supported*  |
| AlexaInterfaceType::MEDIA_SEARCH                    | Supported*  |
| AlexaInterfaceType::MODE_CONTROLLER                 | Supported*  |
| AlexaInterfaceType::MOTION_SENSOR                   | Supported*  |
| AlexaInterfaceType::PERCENTAGE_CONTROLLER           | Supported*  |
| AlexaInterfaceType::PLAYBACK_CONTROLLER             | Supported*  |
| AlexaInterfaceType::PLAYBACK_STATE_REPORTER         | Supported*  |
| AlexaInterfaceType::PROACTIVE_NOTIFICATION_SOURCE   | Supported*  |
| AlexaInterfaceType::RANGE_CONTROLLER                | Supported*  |
| AlexaInterfaceType::RECORD_CONTROLLER               | Supported*  |
| AlexaInterfaceType::REMOTE_VIDEO_PLAYER             | Supported*  |
| AlexaInterfaceType::RTC_SESSION_CONTROLLER          | Supported*  |
| AlexaInterfaceType::SCENE_CONTROLLER                | Supported*  |
| AlexaInterfaceType::SECURITY_PANEL_CONTROLLER       | Supported*  |
| AlexaInterfaceType::SEEK_CONTROLLER                 | Supported*  |
| AlexaInterfaceType::SIMPLE_EVENT_SOURCE             | Supported*  |
| AlexaInterfaceType::SMART_VISION_OBJECT_DETECTION_SENSOR | Supported* |
| AlexaInterfaceType::SMART_VISION_SNAPSHOT_PROVIDER  | Supported*  |
| AlexaInterfaceType::SPEAKER                         | Supported*  |
| AlexaInterfaceType::STEP_SPEAKER                    | Supported*  |
| AlexaInterfaceType::THERMOSTAT_CONTROLLER           | Supported*  |
| AlexaInterfaceType::THERMOSTAT_CONTROLLER_CONFIGURATION | Supported* |
| AlexaInterfaceType::THERMOSTAT_CONTROLLER_HVAC_COMPONENTS | Supported* |
| AlexaInterfaceType::THERMOSTAT_CONTROLLER_SCHEDULE  | Supported*  |
| AlexaInterfaceType::TIME_HOLD_CONTROLLER            | Supported*  |
| AlexaInterfaceType::UI_CONTROLLER                   | Supported*  |
| AlexaInterfaceType::USER_PREFERENCE                 | Supported*  |
| AlexaInterfaceType::VIDEO_RECORDER                  | Supported*  |
| AlexaInterfaceType::WAKE_ON_LAN_CONTROLLER          | Supported*  |


(*Partial support or limited implementation advanced configuration is required)

---

## Contributing

Feel free to submit pull requests or issues for feature requests and bug fixes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
