const REGEX = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
};
type ValidateInputTypes = keyof typeof REGEX;

export const validateInput = (
  value: string,
  type: ValidateInputTypes
): boolean => {
  return value.match(REGEX[type]) ? true : false;
};
