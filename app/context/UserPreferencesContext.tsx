import React, { createContext, useContext, useState } from "react";

// Define types for user preferences
interface UserPreferences {
  gmail: string;
  username: string;
  role: string | null;
  dietaryPreferences: string[];
  allergies: string[];
  favoriteCuisines: string[];
  dislikedIngredients: string[];
  favoriteDishes: string[];
}

// Define context type
interface UserPreferencesContextType {
  preferences: UserPreferences;
  updatePreferences: (key: keyof UserPreferences, value: any) => void;
}

// Create context with default values
const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

// Context provider component
export const UserPreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    gmail: "",
    username: "",
    role: null,
    dietaryPreferences: [],
    allergies: [],
    favoriteCuisines: [],
    dislikedIngredients: [],
    favoriteDishes: [],
  });

  // Function to update preferences
  const updatePreferences = (key: keyof UserPreferences, value: any) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

// Custom hook to use the context
export const useUserPreferences = (): UserPreferencesContextType => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error("useUserPreferences must be used within a UserPreferencesProvider");
  }
  return context;
};
