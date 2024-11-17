import { SettingsFieldContainer } from "./settings-field.styles";

export default function SettingsField({ children, active, onClick, settings }) {
  return (
    <SettingsFieldContainer onClick={onClick} className={active}>
      {children}
    </SettingsFieldContainer>
  );
}
