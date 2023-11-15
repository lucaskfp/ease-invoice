import { InputProps, Input as NextInput } from "@nextui-org/react";

export function Input({ ...rest }: InputProps) {
  return <NextInput size="sm" {...rest} />;
}
