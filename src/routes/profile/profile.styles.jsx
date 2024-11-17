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

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserEdit = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserSummaryContainer = styled.div`
  display: flex;
  gap: 5px;
`;
