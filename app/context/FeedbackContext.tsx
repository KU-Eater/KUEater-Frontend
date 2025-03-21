// context/FeedbackContext.tsx
import React, { createContext, useContext, useState } from "react";

interface FeedbackData {
  feedbackRating: number;
  comment: string;
}

interface FeedbackContextType {
  feedback: FeedbackData;
  updateFeedback: (key: keyof FeedbackData, value: any) => void;
  resetFeedback: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackData>({
    feedbackRating: 0,
    comment: "",
  });

  const updateFeedback = (key: keyof FeedbackData, value: any) => {
    setFeedback((prev) => ({ ...prev, [key]: value }));
  };

  const resetFeedback = () => {
    setFeedback({ feedbackRating: 0, comment: "" });
  };

  return (
    <FeedbackContext.Provider value={{ feedback, updateFeedback, resetFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

// Custom hook to use feedback context
export const useFeedback = (): FeedbackContextType => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
};
