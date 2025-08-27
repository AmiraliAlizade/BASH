import AuthContextProvider from "../authentication/AuthContext";
import SignUpForm from "../authentication/SignUpForm";

function SignUp() {
  return (
    <AuthContextProvider>
      <SignUpForm></SignUpForm>
    </AuthContextProvider>
  );
}

export default SignUp;
