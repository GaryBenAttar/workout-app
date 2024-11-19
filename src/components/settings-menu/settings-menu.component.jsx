import {
  faMoon,
  faUser,
  faLock,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";

import SettingsField from "../settings-field/settings-field.component";
import {
  SettingFieldSpan,
  SettingsFieldsContainer,
  SettingsFieldsHeader,
  StyledIcon,
} from "./settings-menu.styles";

const iconDisplayed = (icon) => {
  switch (icon) {
    case "faMoon":
      return faMoon;
    case "faUser":
      return faUser;
    case "faLock":
      return faLock;
    case "faRuler":
      return faRuler;
    default:
      return "";
  }
};

const SettingsMenu = ({ activeField, handleActiveField, fields }) => {
  return (
    <SettingsFieldsContainer>
      <SettingsFieldsHeader>Settings</SettingsFieldsHeader>
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
            <StyledIcon icon={iconDisplayed(icon)} />
            <SettingFieldSpan>{`${name[0].toUpperCase()}${name.slice(
              1
            )}`}</SettingFieldSpan>
          </SettingsField>
        );
      })}
    </SettingsFieldsContainer>
  );
};

export default SettingsMenu;
