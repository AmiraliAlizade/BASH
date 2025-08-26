import { createContext, useContext } from "react";
import { getUser, loginUser, signUpUser } from "../services/apiAuthentication";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const { mutateAsync: signUpMutation } = useMutation({
    mutationFn: (user) => signUpUser(user),
    onSuccess: () => {
      toast.success("The sign up was successfull !", {
        duration: 3000,
        position: "top-center",
      });
      navigate("/");
    },
    onError: (err) => {
      toast.error(`The sign up was not successfull !`, {
        duration: 5000,
        position: "top-center",
      });
      console.error(err);
    },
  });
  const { mutateAsync: signInMutation } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: () => {
      toast.success("The house was successfully created!", {
        duration: 3000,
        position: "top-center",
      });
      navigate("/");
    },
    onError: (err) => {
      toast.error(`The house can't be created!${err.message}`, {
        duration: 5000,
        position: "top-center",
      });
      console.error(err);
    },
  });

  const { data: User, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: getUser,
  });
  async function SignUp(email, password) {
    try {
      const data = await signUpMutation({ email, password });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function SignIn(email, password) {
    try {
      const data = await signInMutation({ email, password });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  if (SignIn || SignUp)
    return (
      <AuthContext.Provider value={{ SignUp, SignIn }}>
        {children}
      </AuthContext.Provider>
    );
  else {
    return null;
  }
}

export function UseAuth() {
  return useContext(AuthContext);
}

export default AuthContextProvider;
