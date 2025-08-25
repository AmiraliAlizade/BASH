import { supabaseKey } from "./supabase";

export async function signUp(email, password) {
  try {
    await fetch("https://rshvopobmfuretiakfat.supabase.co/auth/v1/signup", {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        "Content-Type": "application/json",
      },
      body: { email: email, password: password },
    });
  } catch (error) {
    console.error(error);
  }
}



