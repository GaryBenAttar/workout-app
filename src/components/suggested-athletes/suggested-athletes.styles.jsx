import styled from "styled-components";
import { borders } from "../../utils/css-const.utils";

export const SuggestedAthletesContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.color.sectionBackground};

  padding: 20px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;
`;
