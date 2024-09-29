import { CommandViewModelJson } from '@headless/components';

const _mockCmdStore: Record<string, CommandViewModelJson> = {
  id1: {
    commands: {
      command13: {
        iconId: 'command13Icon',
        title: 'command13Title',
      },
      command23: {
        iconId: 'command23Icon',
        title: 'command23Title',
      },
    },
    commandHandlers: {
      command13Handler: {
        id: 'command13',
        activeWhen: true,
        visibleWhen: true,
        action: 'command13Action',
      },
      command23Handler: {
        id: 'command23',
        activeWhen: true,
        visibleWhen: true,
        action: 'command23Action',
      },
    },
    commandPlacements: {
      command13Placement: {
        id: 'command13',
        uiAnchor: 'anchor1',
        priority: 2,
      },
      command23Placement: {
        id: 'command23',
        uiAnchor: 'anchor2',
        priority: 2,
      },
    },
  },
};

export const getCommandViewModel = async (
  id: string
): Promise<CommandViewModelJson> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(_mockCmdStore[id]);
    }, 1000);
  });
}
