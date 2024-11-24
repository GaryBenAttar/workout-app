import styled from "styled-components";
import FormInput from "../../ui-components/form-input/form-input.component";
import Button from "../../ui-components/button/button.component";

export const SignInFormContainer = styled.div`
  width: 300px;
`;

export const SignInFormHeading = styled.h2``;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SignInFormInput = styled(FormInput)``;

export const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInButton = styled(Button)`
  padding: 5px;
  width: 150px;
`;

export const SignInWithGoogleButton = styled(Button)``;
