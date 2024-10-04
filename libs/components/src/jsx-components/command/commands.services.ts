interface CommandDefinition {
  commandId: string;
  iconId: string;
  title: string;
  action: string;
  uiAnchor: string;
  activeWhen: boolean;
  visibleWhen: boolean;
  priority: number;
}

type CommandBarDefinitions = Record<string, {[commandId:string]: CommandDefinition}>;

interface CommandInput {
  iconId: string;
  title: string;
}

interface CommandHandlerInput {
  id: string;
  activeWhen: boolean;
  visibleWhen: boolean;
  action: string;
}

interface CommandPlacementInput {
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

const _ctx = {
  commandBarDefinitions: {} as CommandBarDefinitions
};

export const registerCommandViewModel = (input: CommandViewModelJson) => {
  const cmdPlacementMap = Object.values(input.commandPlacements).reduce( (prev, placementDef) => ({
    ...prev,
    [placementDef.id]: placementDef,
  }) , {} as Record<string, CommandPlacementInput>);

  const cmdHandlerMap = Object.values(input.commandHandlers).reduce( (prev, handlerDef) => ({
    ...prev,
    [handlerDef.id]: handlerDef,
  }), {} as Record<string, CommandHandlerInput>);

  const commandDefArr = Object.entries(input.commands).map( ([commandId, commandDef]) => ({
    commandId,
    ...commandDef,
    ...cmdHandlerMap[commandId],
    ...cmdPlacementMap[commandId],
  }));

  const commandBarDefs = commandDefArr.reduce( (prev, commandDef) => {
    const currAnchor = commandDef.uiAnchor;
    if(!prev[currAnchor]) {
      prev[currAnchor] = {} as {[commandId:string]: CommandDefinition}
    }
    prev[currAnchor][commandDef.id] = commandDef;
    return prev;
  }, _ctx.commandBarDefinitions as CommandBarDefinitions);

  _ctx.commandBarDefinitions = Object.entries(commandBarDefs).reduce( (prev, [anchor, commandDefs]) => ({
    ...prev,
    [anchor]: Object.values(commandDefs).sort( (a, b) => a.priority - b.priority).reduce( (prev, commandDef) => ({
      ...prev,
      [commandDef.commandId]: commandDef,
    }), {} as {[commandId:string]: CommandDefinition}),
  }), {} as CommandBarDefinitions);
};

export const getCommandBarDefinition = ( anchor: string) => _ctx.commandBarDefinitions[anchor];

