import { ReactNode } from 'react';

export const TestButton = ({
  action,
  children,
}: {
  action: () => void;
  children: ReactNode[];
}) => {
  return <button onClick={action}>{children}</button>;
};
