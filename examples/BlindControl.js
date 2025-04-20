// Import required modules and types from the compiled TypeScript distribution (via dist/index.js)
const { 
    Alex2MQTT,
    AlexaInterfaceType,
    ActionMapping,
    AlexaActions,
    PowerController
  } = require("../dist/index.js");
  

require("dotenv").config(); // Load environment variables from .env file

// Simulated in-memory device state (used for example/demo purposes)
let outputState = PowerController.OFF;

// Load MQTT connection credentials and root topic from environment variables
const username = process.env.MQTT_USERNAME;
const password = process.env.MQTT_PASSWORD;
const rootTopic = process.env.MQTT_ROOT_TOPIC;

// Create and initialize a new Alexa-to-MQTT client
const alex2NodeClient = new Alex2MQTT(username, password, rootTopic, false);
alex2NodeClient.connect(); // Connect to the MQTT broker

// Define the device name
const deviceName = "Bedroom Blinds";

// Register the device with a unique endpoint ID
const blinds = alex2NodeClient.registerDevice(deviceName, "endpoint1");

// Add basic Alexa capabilities to the device
blinds.addCapability(AlexaInterfaceType.POWER_CONTROLLER);

// Add a toggle controller capability for custom on/off-style commands
const toggle = blinds.addCapability(AlexaInterfaceType.TOGGLE_CONTROLLER);

// Toggle controllers require an instance name to differentiate from other controllers
toggle.setInstance("NodeJS.Toggle");

// Optionally, add a friendly name to improve how Alexa refers to this capability
toggle.addFriendlyName(deviceName, "en-US");

// Define how Alexa's "Open" and "Close" actions map to "TurnOff" and "TurnOn" commands
// This allows controlling blinds via both open/close and on/off style requests
const closeMapping = new ActionMapping([AlexaActions.Close], "TurnOn");
const openMapping = new ActionMapping([AlexaActions.Open], "TurnOff");

// Action mappings are only supported by generic controller interfaces.
// More details: 
// https://developer.amazon.com/en-US/docs/alexa/device-apis/alexa-discovery-objects.html#action-mapping
// https://developer.amazon.com/en-US/docs/alexa/device-apis/generic-controllers.html

toggle.addActionMapping(closeMapping);
toggle.addActionMapping(openMapping);

// Log the device name to verify registration
console.log(blinds.getName());

/**
 * Handle Alexa's ReportState directive.
 * This occurs when Alexa queries the current state of the device (e.g., during routines or device status checks).
 */
blinds.on("ReportState", (payload) => {
  console.log("ReportState received!", payload);

  const { correlationToken } = payload;

  const status = blinds.getStatusMessage(correlationToken);

  status
    .addHealthProp("OK") // Device is healthy
    .addPowerControllerProp(outputState) // Report power state
    .addToggleControllerProp(outputState, "NodeJS.Toggle"); // Report toggle controller state

  status.send(); // Send the state report back to Alexa
});

/**
 * Handle incoming control directives (e.g., TurnOn, TurnOff).
 * These directives come from Alexa when a user issues a command.
 */
blinds.on("Event", (directive, interfaceType) => {
  console.log("Event received", { directive, interfaceType });

  if (
    interfaceType === AlexaInterfaceType.TOGGLE_CONTROLLER ||
    interfaceType === AlexaInterfaceType.POWER_CONTROLLER
  ) {
    const name = directive.header.name;
    const token = directive.header.correlationToken;

    // Update the internal state based on the command
    if (name === "TurnOn") {
      outputState = PowerController.ON;
      console.log("Turning ON");
    } else if (name === "TurnOff") {
      outputState = PowerController.OFF;
      console.log("Turning OFF");
    }

    // Respond to the directive with the updated device status
    const status = blinds.getStatusMessage(token, true);
    status
      .addHealthProp("OK")
      .addToggleControllerProp(outputState, "NodeJS.Toggle")
      .addPowerControllerProp(outputState)
      .send();
  }
});
