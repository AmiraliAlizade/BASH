import { createContext, useContext, useEffect, useState } from "react";
// import { getUser, loginUser, signUpUser } from "../services/apiAuthentication";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import {
  getUser,
  logOutUser,
  signInUser,
  signUpUser,
} from "../services/apiAuthentication";
import { useUserInfo } from "../components/Users/UserInfoContextProvider";
import Spinner from "../ui/Spinner";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["User"],
    queryFn: () => getUser(token),
    enabled: !!token,
  });

  console.log(user);

  useEffect(() => {
    if (!isLoading) {
      setAuthChecked(true);
    }
  }, [isLoading]);
  const {
    mutateAsync: signUpMutation,
    isPending: isSigningUp,
    error,
  } = useMutation({
    // mutationFn: (user) => signUpUser(user),
    mutationFn: async ({ email, password }) => {
      const session = await signUpUser({ email, password });

      if (!session?.access_token) {
        return { session: null, user: null, needsVerification: true };
      }

      return session;
    },

    onSuccess: () => {
      toast.success("Sign up was successfull !", {
        duration: 3000,
        position: "top-center",
      });

      queryClient.invalidateQueries(["User"]);
      if (!error) {
        setAuthChecked(true);
        navigate("/createUser");
      }
    },
    onError: (err) => {
      toast.error(`The sign up was not successfull ! ${err.message}`, {
        duration: 5000,
        position: "top-center",
      });
      console.error(err);
    },
  });

  const {
    mutateAsync: signInMutation,
    isPending: isSigningIn,
    error: SignInError,
  } = useMutation({
    mutationFn: async ({ email, password }) => {
      const session = await signInUser({ email, password });

      if (!session.access_token) {
        return { session: null, user: null, needsVerification: true };
      }

      return session;
    },

    onSuccess: () => {
      toast.success("Sign in was successfull !", {
        duration: 3000,
        position: "top-center",
      });

      navigate("/createUser");

      setAuthChecked(true);
      console.log(authChecked);
    },
    onError: (err) => {
      toast.error(`The sign in was not successfull !${err.message}`, {
        duration: 5000,
        position: "top-center",
      });
      console.error(err);
    },
  });

  const { mutateAsync: logOutUserMutation } = useMutation({
    mutationFn: (access_token) => logOutUser(access_token),
    onSuccess: () => {
      localStorage.removeItem("access_token");
      queryClient.setQueryData(["User"], null);
      navigate("/signIn");
    },
  });

  async function LogOut(access_token) {
    const data = await logOutUserMutation(access_token);
    queryClient.invalidateQueries(["User"]);
    setAuthChecked(true);
    navigate("/signUp");
    setToken(null);
  }

  async function SignUp(email, password) {
    try {
      const session = await signUpMutation({ email, password });
      setToken(session.access_token);

      if (session.access_token) {
        localStorage.setItem("access_token", session.access_token);
      }
      return session;
    } catch (error) {
      console.error(error);
    }
  }

  async function SignIn(email, password) {
    try {
      const session = await signInMutation({ email, password });
      setToken(session.access_token);
      if (session.access_token) {
        localStorage.setItem("access_token", session.access_token);
      }
      return session;
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <AuthContext.Provider
      value={{
        SignIn,
        SignUp,
        LogOut,
        user,
        isLoading,
        isSigningIn,
        isSigningUp,
        token,
        authChecked,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  return useContext(AuthContext);
}

export default AuthContextProvider;
