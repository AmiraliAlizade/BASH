import { data } from "react-router";
import { supabaseKey, supabaseUrl } from "./supabase";

export async function signUpUser({ email, password }) {
  try {
    const res = await fetch(
      "https://rshvopobmfuretiakfat.supabase.co/auth/v1/signup",
      {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || "Sign up faild !");
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signInUser({ email, password }) {
  try {
    const res = await fetch(
      `https://rshvopobmfuretiakfat.supabase.co/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    // Successful login
    console.log("Login successful:", data);
    console.log(data);
    if (!res.ok) {
      throw new Error(data.msg || "Sign up faild !");
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser(userToken) {
  try {
    const response = await fetch(
      "https://rshvopobmfuretiakfat.supabase.co/auth/v1/user",
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    const User = await response.json();
    return User;
  } catch (error) {
    console.error(error);
  }
}

export async function logOutUser(userToken) {
  try {
    await fetch("https://rshvopobmfuretiakfat.supabase.co/auth/v1/logout", {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
