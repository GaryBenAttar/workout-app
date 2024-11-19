import React, { useContext, useState } from "react";

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

  const [changePass, setChangePass] = useState({
    currentPass: "",
    newPass: "",
  });

  const {} = useContext(UserContext);

  const handleOptionChange = (event, payload) => {
    name === "name" &&
      setSettings({
        ...settings,
        name: event.target.value,
      });

    name === "bio" &&
      setSettings({
        ...settings,
        bio: event.target.value,
      });

    name === "current theme" &&
      setSettings({ ...settings, theme: event.target.value.toLowerCase() });

    name === "weight unit" &&
      setSettings({ ...settings, weightUnit: event.target.value });

    name === "distance unit" &&
      setSettings({ ...settings, distanceUnit: event.target.value });

    name === "body measurement unit" &&
      setSettings({ ...settings, bodyMeasurementUnit: event.target.value });

    name === "private profile" &&
      (event.target.value === "On"
        ? setSettings({ ...settings, private: true })
        : setSettings({ ...settings, private: false }));

    if (name === "change password") {
      if (changePass.currentPass === settings.password) {
        setSettings({ ...settings, password: payload });
      } else {
        alert("Invalid current password");
      }
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
