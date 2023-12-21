import { Fragment, ReactNode, useCallback } from "react";

type ForProps<T> = {
  each: T[] | undefined;
  children: (item: T, i: number) => ReactNode;
};

export function For<T>({ each, children }: ForProps<T>) {
  const renderChild = useCallback(
    (item: T, i: number) => <Fragment key={i}>{children(item, i)}</Fragment>,
    [children]
  );

  return <>{each?.map(renderChild)}</>;
}
