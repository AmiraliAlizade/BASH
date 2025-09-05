import { supabaseKey } from "./supabase";

export async function getSearchHistory() {
  try {
    const response = await fetch(
      "https://rshvopobmfuretiakfat.supabase.co/rest/v1/SearchHistory?select=*",
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
