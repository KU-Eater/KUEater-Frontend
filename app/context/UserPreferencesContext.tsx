import React, { createContext, useContext, useState } from "react";

// Define types for user preferences
export interface UserPreferences {
    userID: string | undefined;
    gmail: string;
    username: string;
    role: string | null;
    gender: string | null;
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
        userID: "",
        gmail: "ratchaprapa.c@gmail.com",
        username: "",
        role: null,
        gender: null,
        dietaryPreferences: [],
        allergies: [],
        favoriteCuisines: [],
        dislikedIngredients: [],
        favoriteDishes: [],

        // mock data for test
        // userID: "01",
        // gmail: "ratchaprapa.c@gmail.com",
        // username: "Proud",
        // role: "KU Student",
        // gender: "Female",
        // dietaryPreferences: [],
        // allergies: [],
        // favoriteCuisines: [],
        // dislikedIngredients: [],
        // favoriteDishes: [],
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
