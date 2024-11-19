import { useContext, useEffect, useState } from "react";

import {
  SettingsContainer,
  FieldOptionsContainer,
  SaveChangesButton,
} from "./settings.styles";
import SettingsMenu from "../../components/settings-menu/settings-menu.component";
import SettingsOptions from "../../components/settings-options/settings-options.component";
import fields from "../../settings.json";
import { UserContext } from "../../contexts/user.context";
import { SettingsContext } from "../../contexts/settings.context";

const Settings = () => {
  const [activeField, setActiveField] = useState("profile");
  const { setUsername } = useContext(UserContext);
  const { settings } = useContext(SettingsContext);

  const handleActiveField = (field) => {
    setActiveField(field);
  };

  const handleSaveChanges = () => {
    setUsername(settings.name);
  };

  return (
    <SettingsContainer>
      <SettingsMenu
        activeField={activeField}
        handleActiveField={handleActiveField}
        fields={fields}
      />
      <FieldOptionsContainer>
        <SaveChangesButton onClick={handleSaveChanges}>
          Save Changes
        </SaveChangesButton>

        {fields
          .filter((field) => field.name === activeField)[0]
          .settings.map((setting) => (
            <SettingsOptions setting={setting} key={setting.name} />
          ))}
      </FieldOptionsContainer>
    </SettingsContainer>
  );
};

export default Settings;
