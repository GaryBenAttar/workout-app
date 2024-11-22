import { BaseButton, BlueButton } from "./button.styles.js";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  blue: "blue",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.blue]: BlueButton,
  }[buttonType]);

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
