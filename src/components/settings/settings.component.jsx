import { useContext, useState } from "react";

import {
  SettingsContainer,
  FieldOptionsContainer,
  SaveChangesButton,
} from "./settings.styles";
import SettingsMenu from "./settings-menu/settings-menu.component";
import SettingsOptions from "./settings-options/settings-options.component";
import fields from "../../settings.json";
import { UserContext } from "../../contexts/user.context";
import { SettingsContext } from "../../contexts/settings.context";

const Settings = () => {
  const [activeField, setActiveField] = useState("profile");
  const { setUser } = useContext(UserContext);
  const { settings } = useContext(SettingsContext);

  const handleActiveField = (field) => {
    setActiveField(field);
  };

  const handleSaveChanges = () => {
    setUser((previousState) => ({
      ...previousState,
      userImage: settings.userImage,
      username: settings.name,
      bio: settings.bio,
    }));
  };

  return (
    <SettingsContainer>
      <SettingsMenu
        activeField={activeField}
        handleActiveField={handleActiveField}
        fields={fields}
      />
      <FieldOptionsContainer>
        {activeField === "profile" && (
          <SaveChangesButton buttonType={"blue"} onClick={handleSaveChanges}>
            Save Changes
          </SaveChangesButton>
        )}

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
