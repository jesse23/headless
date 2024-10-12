export interface CommandDefinition {
  commandId: string;
  iconId: string;
  title: string;
  action: string;
  uiAnchor: string;
  activeWhen: boolean;
  visibleWhen: boolean;
  priority: number;
}

export type CommandBarDefinitions = Record<
  string,
  { [commandId: string]: CommandDefinition }
>;

interface CommandInput {
  iconId: string;
  title: string;
}

export interface CommandHandlerInput {
  id: string;
  activeWhen: boolean;
  visibleWhen: boolean;
  action: string;
}

export interface CommandPlacementInput {
  id: string;
  uiAnchor: string;
  priority: number;
}

export interface CommandViewModelJson {
  commands: {
    [commandId: string]: CommandInput;
  };
  commandHandlers: Record<string, CommandHandlerInput>;
  commandPlacements: Record<string, CommandPlacementInput>;
}
