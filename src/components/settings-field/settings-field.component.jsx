import { SettingsFieldContainer } from "./settings-field.styles";

const SettingsField = ({ children, active, onClick, settings }) => {
  return (
    <SettingsFieldContainer onClick={onClick} className={active}>
      {children}
    </SettingsFieldContainer>
  );
};

export default SettingsField;
