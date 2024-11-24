import styled from "styled-components";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

export const SignUpFormContainer = styled.div`
  width: 300px;
`;

export const SignUpFormHeading = styled.h2``;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SignUpFormInput = styled(FormInput)``;

export const SignUpButton = styled(Button)`
  padding: 5px;
  width: 150px;
`;
