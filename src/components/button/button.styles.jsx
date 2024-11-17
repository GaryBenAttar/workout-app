import styled from "styled-components";
import { borders } from "../../utils/css-const.utils";
import Button from "./button.component";

export const BaseButton = styled(Button)`
  background-color: ${(props) => props.theme.color.sectionBackground};

  padding: 10px;
  border: ${(props) => props.theme.borders};
`;
