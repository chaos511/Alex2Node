"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMapping = exports.AlexaActions = void 0;
var AlexaActions;
(function (AlexaActions) {
    AlexaActions["Open"] = "Alexa.Actions.Open";
    AlexaActions["Close"] = "Alexa.Actions.Close";
    AlexaActions["Raise"] = "Alexa.Actions.Raise";
    AlexaActions["Lower"] = "Alexa.Actions.Lower";
    AlexaActions["SetEcoOn"] = "Alexa.Actions.SetEcoOn";
    AlexaActions["SetEcoOff"] = "Alexa.Actions.SetEcoOff";
})(AlexaActions || (exports.AlexaActions = AlexaActions = {}));
class ActionMapping {
    constructor(actions, directiveName, directivePayload) {
        this.type = "ActionsToDirective";
        this.actions = actions;
        this.directive = {
            name: directiveName,
        };
        if (directivePayload) {
            this.directive.payload = directivePayload;
        }
    }
    toJSON() {
        return {
            "@type": this.type,
            actions: this.actions,
            directive: this.directive,
        };
    }
}
exports.ActionMapping = ActionMapping;
