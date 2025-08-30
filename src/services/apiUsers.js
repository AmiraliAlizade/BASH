import { supabaseKey, supabaseUrl } from "./supabase";

export async function createUserInfo(userInfo) {
  try {
    const response = await fetch(
      "https://rshvopobmfuretiakfat.supabase.co/rest/v1/UserInfo",
      {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(userInfo),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserInfo(userId) {
  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/UserInfo?userId=eq.${userId}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
