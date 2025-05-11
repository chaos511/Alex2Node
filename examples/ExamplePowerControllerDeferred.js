// Import required modules and types from the compiled TypeScript distribution (via dist/index.js)
const { 
    Alex2MQTT,
    AlexaInterfaceType,
    PowerController
} = require("../dist/index.js");

require("dotenv").config(); // Load environment variables from .env file

// Simulated in-memory device state (used for example/demo purposes)
let outputState = PowerController.OFF; // Initialize the power state to OFF

// Load MQTT connection credentials and root topic from environment variables
const username = process.env.MQTT_USERNAME;
const password = process.env.MQTT_PASSWORD;
const rootTopic = process.env.MQTT_ROOT_TOPIC;

// Create and initialize a new Alexa-to-MQTT client
const alex2NodeClient = new Alex2MQTT(username, password, rootTopic, false);
alex2NodeClient.connect(); // Connect to the MQTT broker

// Define the device name (deferred light)
const deviceName = "Deferred Light";

// Register the device with a unique endpoint ID (you can use something like "endpoint1")
const deferredLight = alex2NodeClient.registerDevice(deviceName, "endpoint3");

// Add the PowerController capability (for turning on/off the device)
deferredLight.addCapability(AlexaInterfaceType.POWER_CONTROLLER);

// Log the device name to verify registration
console.log(deferredLight.getName());

/**
 * Handle Alexa's ReportState directive.
 * This occurs when Alexa queries the current state of the device (e.g., during routines or device status checks).
 */
deferredLight.on("ReportState", (payload) => {
  console.log("ReportState received!", payload);

  const { correlationToken } = payload.header;

  // Step 1: Send a DeferredResponse after ~1 second
  setTimeout(() => {
    const deferred = deferredLight.getStatusMessage(correlationToken, false, true); // isDeferred = true
    deferred.addEstimatedDeferralTime(20).send();
    console.log("Sent DeferredResponse");
  }, 2000); // simulate slight delay before deferred response

  // Step 2: Send actual StateReport after 10 seconds
  setTimeout(() => {
    const status = deferredLight.getStatusMessage(correlationToken,false,false); // normal StateReport
    status
      .addHealthProp("OK")
      .addPowerControllerProp(outputState)
      .send(true);
    console.log("Sent actual StateReport with device status");
  }, 8000);
});


/**
 * Handle incoming control directives (e.g., TurnOn, TurnOff).
 * These directives come from Alexa when a user issues a command.
 */
deferredLight.on("Event", (directive, interfaceType) => {
  console.log("Event received", { directive, interfaceType });

  // Ensure the interfaceType is either PowerController or other valid interfaces
  if (interfaceType === AlexaInterfaceType.POWER_CONTROLLER) {
    const name = directive.header.name;
    const token = directive.header.correlationToken;

    // Update the internal state based on the command (TurnOn / TurnOff)
    if (name === "TurnOn") {
      outputState = PowerController.ON;
      console.log("Turning ON the Deferred Light");
    } else if (name === "TurnOff") {
      outputState = PowerController.OFF;
      console.log("Turning OFF the Deferred Light");
    }

    // Respond to the directive with the updated device status
    const status = deferredLight.getStatusMessage(token, true);
    status
      .addHealthProp("OK")
      .addPowerControllerProp(outputState)
      .send();
  }
});
