import AuthContextProvider from "../authentication/AuthContext";
import SignInForm from "../authentication/SignInForm";


function SignIn() {
  return (
    <AuthContextProvider>
      <SignInForm />
    </AuthContextProvider>
  );
}

export default SignIn;
