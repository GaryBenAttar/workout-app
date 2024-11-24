import styled from "styled-components";
import Button from "../../../components/ui-components/button/button.component";

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

export const CreateRoutineHeading = styled.h2``;

export const SaveRoutineButton = styled(Button)`
  height: 30px;
`;

export const LibraryContainer = styled.div``;
