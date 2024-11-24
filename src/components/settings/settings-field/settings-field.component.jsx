import { SettingsFieldContainer } from "./settings-field.styles";

const SettingsField = ({ children, active, onClick }) => {
  return (
    <SettingsFieldContainer onClick={onClick} active={active.toString()}>
      {children}
    </SettingsFieldContainer>
  );
};

export default SettingsField;
