import React from "react";
import {
  FormInputContainer,
  InputStyled,
  LabelStyled,
} from "./form-input.styles";

const FormInput = ({ label, onChange }) => {
  return (
    <FormInputContainer>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled onChange={onChange} />
    </FormInputContainer>
  );
};

export default FormInput;
