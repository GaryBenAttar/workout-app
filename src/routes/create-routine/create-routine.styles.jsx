import styled from "styled-components";

export const CreateRoutineContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;

  width: 100%;
`;

export const NewRoutineContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 3;
  gap: 20px;
`;

export const CreateRoutineHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: inherit;
  height: 30px;
`;

export const SaveRoutineButton = styled.button`
  color: white;
  background-color: ${(props) => props.theme.color.blue};

  height: 30px;
  border: none;
  border-radius: 8px;

  cursor: pointer;

  &.disabled {
    background-color: ${(props) => props.theme.color.lightBlue};
    cursor: auto;
  }
`;

export const LibraryContainer = styled.div``;
