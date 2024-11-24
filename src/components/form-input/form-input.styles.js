import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyled = styled.label``;
export const InputStyled = styled.input`
  height: 30px;

  border-radius: 8px;
  border: ${(props) => props.theme.borders};
`;
