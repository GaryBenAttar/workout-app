import { AuthenticationContainer } from "./authentication.styles";
import SignIn from "./sign-in/sign-in.component";
import SignUp from "./sign-up/sign-up.component";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
