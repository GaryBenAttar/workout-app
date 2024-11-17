import React, { useContext, useState } from "react";

import { SettingsContext } from "../../contexts/settings.context";
import {
  ChangePassword,
  SettingSelect,
  SettingsOptionsContainer,
} from "./settings-options.styles";
import { UserContext } from "../../contexts/user.context";

export default function SettingsOptions({ setting }) {
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
      {name !== "picture" && name !== "change password" ? (
        <span>{`${name[0].toUpperCase()}${name.slice(1)}`}</span>
      ) : null}

      {options.length ? (
        <SettingSelect onChange={handleOptionChange}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </SettingSelect>
      ) : null}

      {name === "name" ? (
        <input value={settings.name} onChange={handleOptionChange} />
      ) : null}

      {name === "bio" ? (
        <input value={settings.bio} onChange={handleOptionChange} />
      ) : null}

      {name === "change password" ? (
        <ChangePassword>
          <label>Current Password</label>
          <input
            value={changePass.currentPass}
            onChange={(event) => {
              setChangePass({ ...changePass, currentPass: event.target.value });
            }}
          />
          <label>New Password</label>
          <input
            onChange={(event) => {
              setChangePass({ ...changePass, newPass: event.target.value });
            }}
            value={changePass.newPass}
          />
          <button onClick={() => handleOptionChange(changePass.newPass)}>
            Update Password
          </button>
        </ChangePassword>
      ) : null}
    </SettingsOptionsContainer>
  );
}
