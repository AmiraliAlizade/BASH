import AuthContextProvider from "../ui/AuthContext";
import SignUpForm from "../ui/SignUpForm";

function SignUp() {
  return (
    <AuthContextProvider>
      <SignUpForm></SignUpForm>
    </AuthContextProvider>
  );
}


export default SignUp