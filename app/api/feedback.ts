// api/feedback.ts
export const sendFeedback = async (feedbackRating: number, comment: string) => {
    try {
      const response = await fetch("https://your-backend-api.com/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedbackRating, comment }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send feedback");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error sending feedback:", error);
      throw error;
    }
  };
  