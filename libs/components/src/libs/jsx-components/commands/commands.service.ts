import { getConfigs, setConfigs } from '@headless/core';
import {
  CommandViewModelJson,
  CommandPlacementInput,
  CommandHandlerInput,
  CommandDefinition,
  CommandBarDefinitions,
} from './commands.type';

const CONFIG_KEY = 'commands';

export const registerCommandViewModel = (input: CommandViewModelJson) => {
  const cmdPlacementMap = Object.values(input.commandPlacements).reduce(
    (prev, placementDef) => ({
      ...prev,
      [placementDef.id]: placementDef,
    }),
    {} as Record<string, CommandPlacementInput>
  );

  const cmdHandlerMap = Object.values(input.commandHandlers).reduce(
    (prev, handlerDef) => ({
      ...prev,
      [handlerDef.id]: handlerDef,
    }),
    {} as Record<string, CommandHandlerInput>
  );

  const commandDefArr = Object.entries(input.commands).map(
    ([commandId, commandDef]) => ({
      commandId,
      ...commandDef,
      ...cmdHandlerMap[commandId],
      ...cmdPlacementMap[commandId],
    })
  );

  const commandBarDefs = commandDefArr.reduce((prev, commandDef) => {
    const currAnchor = commandDef.uiAnchor;
    if (!prev[currAnchor]) {
      prev[currAnchor] = {} as { [commandId: string]: CommandDefinition };
    }
    prev[currAnchor][commandDef.id] = commandDef;
    return prev;
  }, getConfigs<CommandBarDefinitions>(CONFIG_KEY) || {});

  setConfigs(
    CONFIG_KEY,
    Object.entries(commandBarDefs).reduce(
      (prev, [anchor, commandDefs]) => ({
        ...prev,
        [anchor]: Object.values(commandDefs)
          .sort((a, b) => a.priority - b.priority)
          .reduce(
            (prev, commandDef) => ({
              ...prev,
              [commandDef.commandId]: commandDef,
            }),
            {} as { [commandId: string]: CommandDefinition }
          ),
      }),
      {} as CommandBarDefinitions
    )
  );
};

export const getCommandBarDefinition = (anchor: string) =>
  getConfigs<CommandBarDefinitions>('commands')?.[anchor];
