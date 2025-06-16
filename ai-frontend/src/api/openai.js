const apiUrl = import.meta.env.VITE_API_URL;


export const generateLyrics = async (mood) => {
  try {
    const response = await fetch(`${apiUrl}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mood }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(" API Error:", data.error);
      return `API Error: ${data.error}`;
    }

    return data.lyrics;
  } catch (err) {
    console.error(" Network Error:", err);
    return "Oops! Something went wrong.";
  }
};
