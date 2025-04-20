export enum AlexaActions {
  Open = "Alexa.Actions.Open",
  Close = "Alexa.Actions.Close",
  Raise = "Alexa.Actions.Raise",
  Lower = "Alexa.Actions.Lower",
  SetEcoOn = "Alexa.Actions.SetEcoOn",
  SetEcoOff = "Alexa.Actions.SetEcoOff",
}

interface Directive {
  name: string;
  payload?: string;
}

export class ActionMapping {
  type: string = "ActionsToDirective";
  actions: AlexaActions[];
  directive: Directive;

  constructor(
    actions: AlexaActions[],
    directiveName: string,
    directivePayload: string | undefined
  ) {
    this.actions = actions;
    this.directive = {
      name: directiveName,
    };
    if (directivePayload) {
      this.directive.payload = directivePayload;
    }
  }

  toJSON(): object {
    return {
      "@type": this.type,
      actions: this.actions,
      directive: this.directive,
    };
  }
}
