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
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ["User"],
    queryFn: () => getUser(token),
    enabled: !!token,
  });

  const { mutateAsync: signUpMutation, error } = useMutation({
    // mutationFn: (user) => signUpUser(user),
    mutationFn: async ({ email, password }) => {
      const session = await signUpUser({ email, password });

      if (!session?.access_token) {
        return { session: null, user: null, needsVerification: true };
      }

      return session;
    },

    onSuccess: () => {
      toast.success("The sign up was successfull !", {
        duration: 3000,
        position: "top-center",
      });
      queryClient.invalidateQueries(["User"]);
      if (!error) {
        navigate("/");
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
  const { mutateAsync: signInMutation } = useMutation({
    mutationFn: async ({ email, password }) => {
      const session = await signInUser({ email, password });

      if (!session.access_token) {
        return { session: null, user: null, needsVerification: true };
      }

      return session;
    },
    onSuccess: () => {
      toast.success("The house was successfully created!", {
        duration: 3000,
        position: "top-center",
      });
      queryClient.invalidateQueries(["User"]);
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

  const { mutateAsync: logOutUserMutation } = useMutation({
    mutationFn: (access_token) => logOutUser(access_token),
    onSuccess: () => {
      localStorage.removeItem("access_token");
      queryClient.setQueryData(["User"], null);
      navigate("/signIn");
    },
  });

  async function LogOut(access_token) {
    await logOutUserMutation(access_token);
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

  return (
    <AuthContext.Provider value={{ SignIn, SignUp, LogOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  return useContext(AuthContext);
}

export default AuthContextProvider;
