import styled from "styled-components";

export const SettingsOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: ${(props) => props.theme.borders};
  padding: 10px;

  input {
    background-color: ${(props) => props.theme.color.sectionBackground};
    color: ${(props) => props.theme.color.textMain};
    border: none;
    width: 100%;
  }
`;

export const SettingSelect = styled.select`
  height: 30px;
  width: 150px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.select};
  color: ${(props) => props.theme.color.textMain};
`;

export const ChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    background-color: ${(props) => props.theme.color.input};

    height: 30px;
    width: 200px;
    border-radius: 8px;
  }

  button {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.textMain};

    width: 150px;
    padding: 10px;
    border: none;
    border-radius: 8px;
  }
`;
