import { useContext, useState } from "react";

import { SettingsContext } from "../../contexts/settings.context";
import {
  ChangePassword,
  ChangePasswordButton,
  ChangePasswordInput,
  SettingSelect,
  SettingSelectOption,
  SettingsOptionsContainer,
  SettingsOptionsInput,
  SettingsOptionsLabel,
  SettingsOptionsSpan,
} from "./settings-options.styles";
import { UserContext } from "../../contexts/user.context";

const SettingsOptions = ({ setting }) => {
  const { settings, setSettings } = useContext(SettingsContext);
  const { name, options } = setting;

  const { user } = useContext(UserContext);

  const [changePass, setChangePass] = useState({
    currentPass: "",
    newPass: "",
  });

  const handleOptionChange = (event, payload) => {
    switch (name) {
      case "image":
        setSettings({
          ...settings,
          userImage: event.target.files[0],
        });
        break;
      case "name":
        setSettings({
          ...settings,
          name: event.target.value,
        });
        break;
      case "bio":
        setSettings({
          ...settings,
          bio: event.target.value,
        });
        break;
      case "current theme":
        setSettings({ ...settings, theme: event.target.value.toLowerCase() });
        break;
      case "weight unit":
        setSettings({ ...settings, weightUnit: event.target.value });
        break;
      case "distance unit":
        setSettings({ ...settings, distanceUnit: event.target.value });
        break;
      case "body measurement unit":
        setSettings({ ...settings, bodyMeasurementUnit: event.target.value });
        break;
      case "private profile":
        event.target.value === "On"
          ? setSettings({ ...settings, private: true })
          : setSettings({ ...settings, private: false });
        break;
      case "change password":
        if (changePass.currentPass === settings.password) {
          setSettings({ ...settings, password: payload });
        } else {
          alert("Invalid current password");
        }
        break;

      default:
        break;
    }
  };

  return (
    <SettingsOptionsContainer>
      {name !== "picture" && name !== "change password" && (
        <SettingsOptionsSpan>{`${name[0].toUpperCase()}${name.slice(
          1
        )}`}</SettingsOptionsSpan>
      )}

      {options.length ? (
        <SettingSelect onChange={handleOptionChange}>
          {options.map((option) => (
            <SettingSelectOption key={option}>{option}</SettingSelectOption>
          ))}
        </SettingSelect>
      ) : null}
      {name === "image" && (
        <SettingsOptionsInput value={settings.userImage} type="file" />
      )}
      {name === "name" && (
        <SettingsOptionsInput
          value={settings.name}
          onChange={handleOptionChange}
        />
      )}

      {name === "bio" && (
        <SettingsOptionsInput
          value={settings.bio}
          onChange={handleOptionChange}
        />
      )}

      {name === "change password" && (
        <ChangePassword>
          <SettingsOptionsLabel>Current Password</SettingsOptionsLabel>
          <ChangePasswordInput
            value={changePass.currentPass}
            onChange={(event) => {
              setChangePass({ ...changePass, currentPass: event.target.value });
            }}
          />
          <SettingsOptionsLabel>New Password</SettingsOptionsLabel>
          <ChangePasswordInput
            onChange={(event) => {
              setChangePass({ ...changePass, newPass: event.target.value });
            }}
            value={changePass.newPass}
          />
          <ChangePasswordButton
            onClick={() => handleOptionChange(changePass.newPass)}
          >
            Update Password
          </ChangePasswordButton>
        </ChangePassword>
      )}
    </SettingsOptionsContainer>
  );
};

export default SettingsOptions;
