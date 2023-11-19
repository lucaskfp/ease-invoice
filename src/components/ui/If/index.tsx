import { ReactNode } from "react";

type IfProps = {
  condition: boolean;
  children: ReactNode;
};

export function If({ condition, children }: IfProps) {
  if (!condition) return null;

  return children;
}
