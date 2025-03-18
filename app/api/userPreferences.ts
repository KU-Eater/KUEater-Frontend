const API_BASE_URL = "https://your-backend.com/api"; // Replace with your actual API URL

// Function to send user preferences to the backend
export const saveUserPreferences = async (preferences: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/preferences`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(preferences),
    });

    if (!response.ok) {
      throw new Error("Failed to save user preferences");
    }

    return await response.json(); // Return response data if needed
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Function to check if a user already exists in the backend
export const checkUserExists = async (gmail: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gmail }),
    });

    if (!response.ok) {
      throw new Error("Failed to check user existence");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
