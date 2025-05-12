// Import required modules and types from the compiled TypeScript distribution (via dist/index.js)
const {
  Alex2MQTT,
  AlexaInterfaceType,
  PowerController,
  TemperatureSensorScale,
  DisplayCategory,
  ThermostatMode,
} = require("../dist/index.js");

require("dotenv").config(); // Load environment variables from .env file

// Simulated in-memory device state (used for example/demo purposes)
let outputState = PowerController.OFF; // Initialize the power state to OFF (if thermostat supports ON/OFF modes)

// Load MQTT connection credentials and root topic from environment variables
const username = process.env.MQTT_USERNAME;
const password = process.env.MQTT_PASSWORD;
const rootTopic = process.env.MQTT_ROOT_TOPIC;

// Create and initialize a new Alexa-to-MQTT client
const alex2NodeClient = new Alex2MQTT(username, password, rootTopic, false);
alex2NodeClient.connect(); // Connect to the MQTT broker

// Define the device name (Thermostat Test)
const deviceName = "Thermostat Test";

// Register the thermostat device with a unique endpoint ID
const thermostat = alex2NodeClient.registerDevice(
  deviceName,
  "thermostatEndpoint1",
  [DisplayCategory.TEMPERATURE_SENSOR, DisplayCategory.THERMOSTAT]
);

// Add thermostat-related capabilities
thermostat.addCapability(AlexaInterfaceType.THERMOSTAT_CONTROLLER); // Allows Alexa to control thermostat modes and setpoints
thermostat.addCapability(AlexaInterfaceType.TEMPERATURE_SENSOR); // Allows Alexa to read current temperature from the sensor

// Log the device name to verify registration
console.log(thermostat.getName());

/**
 * Handle Alexa's ReportState directive.
 * This occurs when Alexa queries the current state of the thermostat (e.g., during routines or device status checks).
 */

const deviceData = {
  lowerSetpoint: 50,
  upperSetpoint: 70,
  targetSetpoint: 60,
  current: 69,
  thermostatMode: ThermostatMode.HEAT,
};
thermostat.on("ReportState", (payload) => {
  // console.log("ReportState received!", payload);

  const { correlationToken } = payload.header;

  let status = thermostat.getStatusMessage(correlationToken);

  status
    .addHealthProp("OK") // Device is healthy and reachable
    .addTemperatureSensorProp(
      TemperatureSensorScale.CELSIUS,
      deviceData.current
    ) // Report current temperature
    .addThermostatModeProp(deviceData.thermostatMode); // Report current thermostat mode

  if (deviceData.thermostatMode == "AUTO") {
    status = status
      .addThermostatControllerProp(
        "lowerSetpoint",
        TemperatureSensorScale.CELSIUS,
        deviceData.lowerSetpoint
      ) // Lower bound of temperature range
      .addThermostatControllerProp(
        "upperSetpoint",
        TemperatureSensorScale.CELSIUS,
        deviceData.upperSetpoint
      ); // Upper bound of temperature range
  } else {
    status = status.addThermostatControllerProp(
      "targetSetpoint",
      TemperatureSensorScale.CELSIUS,
      deviceData.targetSetpoint
    ); // Lower bound of temperature range
  }
  status.send(); // Send the full state report back to Alexa
});

/**
 * Handle incoming control directives for the thermostat.
 * These directives come from Alexa when a user issues a command (e.g., to change temperature or mode).
 */
thermostat.on("Event", (directive, interfaceType) => {
  console.log("Event received", { directive, interfaceType });
  if (interfaceType === AlexaInterfaceType.THERMOSTAT_CONTROLLER) {
    const name = directive.header.name;
    const token = directive.header.correlationToken;

    if (name == "SetTargetTemperature") {
      console.log({ name: directive.payload });
      if (directive.payload.upperSetpoint) {
        deviceData.upperSetpoint = parseTempValue(
          directive.payload.upperSetpoint
        );
      }
      if (directive.payload.lowerSetpoint) {
        deviceData.lowerSetpoint = parseTempValue(
          directive.payload.lowerSetpoint
        );
      }
      if (directive.payload.targetSetpoint) {
        deviceData.targetSetpoint = parseTempValue(
          directive.payload.targetSetpoint
        );
      }
    }
    if (name == "SetThermostatMode") {
      console.log(directive.payload.thermostatMode);
      if (directive.payload.thermostatMode) {
        deviceData.thermostatMode = directive.payload.thermostatMode.value;
      }
    }

    let status = thermostat.getStatusMessage(token, true);

    status
      .addHealthProp("OK") // Device is healthy and reachable
      .addTemperatureSensorProp(
        TemperatureSensorScale.FAHRENHEIT,
        deviceData.current
      ) // Report current temperature
      .addThermostatModeProp(deviceData.thermostatMode); // Report current thermostat mode
    if (deviceData.thermostatMode == "AUTO") {
      status = status
        .addThermostatControllerProp(
          "lowerSetpoint",
          TemperatureSensorScale.FAHRENHEIT,
          deviceData.lowerSetpoint
        ) // Lower bound of temperature range
        .addThermostatControllerProp(
          "upperSetpoint",
          TemperatureSensorScale.FAHRENHEIT,
          deviceData.upperSetpoint
        ); // Upper bound of temperature range
    } else {
      status = status.addThermostatControllerProp(
        "targetSetpoint",
        TemperatureSensorScale.FAHRENHEIT,
        deviceData.targetSetpoint
      ); // Lower bound of temperature range
    }
    status.send(); // Send the full state report back to Alexa
  }
});

function parseTempValue(data) {
  console.log(data);

  if (data.scale === "FAHRENHEIT") {
    return data.value;
  }

  const fahrenheit = (data.value * 9) / 5 + 32;
  return fahrenheit;
}
