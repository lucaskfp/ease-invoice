import { ButtonProps, Button as NextButton } from "@nextui-org/react";

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <NextButton size="lg" {...rest}>
      {children}
    </NextButton>
  );
}
