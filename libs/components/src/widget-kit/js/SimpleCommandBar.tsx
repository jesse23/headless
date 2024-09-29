import { getCommandBarDefinition } from "./services/commands.services";

const SimpleCommand = ({
  commandId,
  commandName,
  action,
  visibleWhen,
}: {
  commandId: string;
  commandName: string;
  action: () => void;
  visibleWhen?: () => boolean;
}) => {
  return (!visibleWhen || visibleWhen()) ? (
      <button key={commandId} onClick={action}>
        {commandName}
      </button>
    ) : null;
};

export const SimpleCommandBar = ({ anchor }: { anchor: string }) => {
  const commandDefs = getCommandBarDefinition(anchor);
  return (
    commandDefs &&
    Object.values(commandDefs).map((commandDef) => (
      <SimpleCommand
        key={commandDef.commandId}
        commandId={commandDef.commandId}
        commandName={commandDef.title}
        action={() => {
          console.log(commandDef.action);
        }}
      />
    ))
  );
};
