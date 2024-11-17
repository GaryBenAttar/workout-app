import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  gap: 50px;

  padding: 20px;
  width: 100%;
`;

export const NoWorkoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 300px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;
export const WorkoutsHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-width: 60%;
  padding: 10px;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  min-width: 350px;
  width: 30%;
  padding: 10px;
`;

export const HomeHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 5px 50px;

    border: none;
    border-radius: 8px;

    color: white;
    background-color: ${(props) => props.theme.color.blue};
  }
`;
