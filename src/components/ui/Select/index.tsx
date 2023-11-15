import { Select as NextSelect, SelectProps } from "@nextui-org/react";

export function Select({ children, ...rest }: SelectProps) {
  return (
    <NextSelect size="sm" {...rest}>
      {children}
    </NextSelect>
  );
}
