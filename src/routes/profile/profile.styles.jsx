import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 30px;

  padding: 20px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
