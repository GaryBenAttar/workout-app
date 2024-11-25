import React from "react";
import {
  FormInputContainer,
  InputStyled,
  LabelStyled,
} from "./form-input.styles";

const FormInput = ({ value, label, onChange, required }) => {
  return (
    <FormInputContainer>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled onChange={onChange} required={required} value={value} />
    </FormInputContainer>
  );
};

export default FormInput;
