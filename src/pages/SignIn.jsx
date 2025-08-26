import AuthContextProvider from "../ui/AuthContext";
import SignInForm from "../ui/SignInForm";

function SignIn() {
  return (
    <AuthContextProvider>
      <SignInForm />
    </AuthContextProvider>
  );
}

export default SignIn;
