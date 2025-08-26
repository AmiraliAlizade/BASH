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
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser({ email, password }) {
  try {
    const res = await fetch(
      `https://rshvopobmfuretiakfat.supabase.co/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Login failed:", data);
      return null;
    }

    // Successful login
    console.log("Login successful:", data);
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
}

export async function getUser() {
  try {
    fetch("https://rshvopobmfuretiakfat.supabase.co/auth/v1/user", {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
