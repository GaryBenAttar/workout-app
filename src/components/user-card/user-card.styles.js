import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: ${(props) => props.theme.color.sectionBackground};

  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  padding: 20px;
`;

export const UserNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UsernameSpan = styled.span`
  font-weight: 600;
`;

export const FullnameSpan = styled.span`
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};
  font-size: 0.9rem;
`;

export const UserImageContainer = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;
export const UserSummaryContainer = styled.div`
  display: flex;

  gap: 30px;
`;

export const UserSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserSummaryTitleSpan = styled.span`
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};
  font-size: 0.8rem;
`;

export const UserSummarySpan = styled.span``;

export const UserProfileButton = styled.button`
  width: 100%;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  padding: 5px;

  background-color: ${(props) => props.theme.color.sectionBackground};
  color: ${(props) => props.theme.color.textMain};
`;
