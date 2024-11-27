import {
  SignUpButton,
  SignUpForm,
  SignUpFormContainer,
  SignUpFormHeading,
  SignUpFormInput,
} from "./sign-up.styles";
import { useSignUp } from "./hooks/useSignUp.hook";

const SignUp = () => {
  const { signUpDetails, setSignUpDetails, handleSignUp } = useSignUp();

  return (
    <SignUpFormContainer>
      <SignUpFormHeading>You do not have an account yet?</SignUpFormHeading>
      <SignUpForm>
        <SignUpFormInput
          required
          label="Username"
          value={signUpDetails.username}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              username: event.target.value,
            })
          }
        />
        <SignUpFormInput
          required
          label="Email"
          type="email"
          value={signUpDetails.email}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              email: event.target.value,
            })
          }
        />
        <SignUpFormInput
          required
          label="Password"
          type="password"
          value={signUpDetails.password}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              password: event.target.value,
            })
          }
        />
        <SignUpFormInput
          required
          label="Confirm Password"
          type="password"
          value={signUpDetails.confirmPassword}
          onChange={(event) =>
            setSignUpDetails({
              ...signUpDetails,
              confirmPassword: event.target.value,
            })
          }
        />
        <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpFormContainer>
  );
};

export default SignUp;
