const {
  Alex2MQTT,
  AlexaInterfaceType,
  PowerController,
  AlexaErrorType,
} = require("../dist/index.js");

require("dotenv").config();

let outputState = PowerController.OFF;

const username = process.env.MQTT_USERNAME;
const password = process.env.MQTT_PASSWORD;
const rootTopic = process.env.MQTT_ROOT_TOPIC;

const alex2NodeClient = new Alex2MQTT(username, password, rootTopic, false);
alex2NodeClient.connect();

const errorLight = alex2NodeClient.registerDevice("bad light", "endpoint4");
errorLight.addCapability(AlexaInterfaceType.POWER_CONTROLLER);

console.log(errorLight.getName());

// Error cycling setup
const errorCycle = [
  AlexaErrorType.ENDPOINT_LOW_POWER,
  AlexaErrorType.VALUE_OUT_OF_RANGE,
  AlexaErrorType.HARDWARE_MALFUNCTION,
  AlexaErrorType.BRIDGE_UNREACHABLE,
  AlexaErrorType.FIRMWARE_OUT_OF_DATE,
  AlexaErrorType.NOT_CALIBRATED,
  AlexaErrorType.RATE_LIMIT_EXCEEDED,
];
let currentErrorIndex = 0;

/**
 * Always return ENDPOINT_BUSY error on state queries.
 */
errorLight.on("ReportState", (payload) => {
  console.log("ReportState received!", payload);

  const { correlationToken } = payload.header;
  const errorResponse = errorLight.getErrorMessage(correlationToken);

  errorResponse.setErrorMessage(
    AlexaErrorType.HARDWARE_MALFUNCTION,
    "The device is currently busy and cannot report its state."
  );
  console.log("Sending error: HARDWARE_MALFUNCTION");
  errorResponse.send();
});

/**
 * Handle control directives with 90% error chance, cycling through fixed errors.
 */
errorLight.on("Event", (directive, interfaceType) => {
  if (interfaceType === AlexaInterfaceType.POWER_CONTROLLER) {
    const name = directive.header.name;
    const token = directive.header.correlationToken;

    const shouldError = Math.random() < 0.9;

    if (shouldError) {
      const errorType = errorCycle[currentErrorIndex];
      currentErrorIndex = (currentErrorIndex + 1) % errorCycle.length;

      const errorResponse = errorLight.getErrorMessage(token);
      errorResponse.setErrorMessage(
        errorType,
        `Failed to process ${name} due to ${errorType.replace(/_/g, " ").toLowerCase()}.`
      );
      console.log(`Sending error: ${errorType}`);
      errorResponse.send();
      return;
    }

    // Success path
    if (name === "TurnOn") {
      outputState = PowerController.ON;
      console.log("Turning ON the Light");
    } else if (name === "TurnOff") {
      outputState = PowerController.OFF;
      console.log("Turning OFF the Light");
    }

    const status = errorLight.getStatusMessage(token, true);
    status
      .addHealthProp("OK")
      .addPowerControllerProp(outputState)
      .send();
  }
});
