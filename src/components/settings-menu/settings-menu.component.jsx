import SettingsField from "../settings-field/settings-field.component";
import { SettingsFieldsContainer } from "./settings-menu.styles";

export default function SettingsMenu({
  activeField,
  handleActiveField,
  fields,
}) {
  return (
    <SettingsFieldsContainer>
      <h2>Settings</h2>
      {fields.map((field) => {
        const { icon, name, settings } = field;
        return (
          <SettingsField
            onClick={() => handleActiveField(name)}
            active={activeField === `${name}` ? "active" : ""}
            key={name}
            name={name}
            settings={settings}
          >
            <i className={`fa-solid fa-${icon}`}></i>
            <span>{`${name[0].toUpperCase()}${name.slice(1)}`}</span>
          </SettingsField>
        );
      })}
    </SettingsFieldsContainer>
  );
}
