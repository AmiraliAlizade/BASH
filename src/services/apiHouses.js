import { supabaseUrl } from "./supabase";

export async function getHouses() {
  const SupabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzaHZvcG9ibWZ1cmV0aWFrZmF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDEyOTg3MCwiZXhwIjoyMDY5NzA1ODcwfQ.Lz7rnqP_9fORlnHVoQ2YgXkFqVfNSndM2V7_NuSxx5Y";
  try {
    const data = await fetch(
      "https://rshvopobmfuretiakfat.supabase.co/rest/v1/Houses?select=*",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${SupabaseKey}`,
          apikey: SupabaseKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!data.ok) {
      throw new Error(data.status);
    }
    const Houses = await data.json();

    return Houses;
  } catch (error) {
    console.error(error);
  }
}

export async function createHouse(house) {
  const imageName = `${Math.random()}-${house.image.name}`.replaceAll("/", "");

  const hasImagePath = house.image.startsWith?.(supabaseUrl);

  const imagePath = hasImagePath
    ? house.image
    : `https://rshvopobmfuretiakfat.supabase.co/storage/v1/object/public/Images//${imageName}`;

  const SupabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzaHZvcG9ibWZ1cmV0aWFrZmF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDEyOTg3MCwiZXhwIjoyMDY5NzA1ODcwfQ.Lz7rnqP_9fORlnHVoQ2YgXkFqVfNSndM2V7_NuSxx5Y";
  try {
    const response = await fetch(
      "https://rshvopobmfuretiakfat.supabase.co/rest/v1/Houses",
      {
        method: "POST",
        headers: {
          apikey: SupabaseKey,
          Authorization: `Bearer ${SupabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify([{ ...house, image: imagePath }]),
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const Data = await response.json();
    const lastRow = Data[0];

    console.log(lastRow);
    const uploadImage = await fetch(
      `https://rshvopobmfuretiakfa.supabase.co/storage/v1/object/Images//${imageName}`,
      {
        method: "POST",
        headers: {
          apikey: SupabaseKey,
          Authorization: `Bearer ${SupabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: house?.image,
      }
    );

    if (!uploadImage.ok) {
      const res = await fetch(
        `https://rshvopobmfuretiakfat.supabase.co/rest/v1/Houses?id=eq.${lastRow.id}`,
        {
          method: "DELETE",
          headers: {
            apikey: SupabaseKey,
            Authorization: `Bearer ${SupabaseKey}`,
          },
        }
      );
      throw new Error(
        "The image upload was failed! and the House creation canceled!"
      );
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    return data;
  } catch (error) {
    if (!uploadImage.ok) {
      return error;
    }
    return null;
  }
}

// export async function createHouse(house) {
//   try {
//     const response = await fetch(
//       "https://rshvopobmfuretiakfat.supabase.co/rest/v1/Houses",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${SupabaseKey}`,
//           apikey: SupabaseKey,
//           Prefer: "return=minimal",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(house),
//       }
//     );

//     const data = await response.json();j
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
