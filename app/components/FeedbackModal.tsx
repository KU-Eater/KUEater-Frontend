// components/FeedbackModal.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFeedback } from "../context/FeedbackContext";
import { sendFeedback } from "../api/feedback";
import { useUserPreferences } from "../context/UserPreferencesContext";
import Stars from "./Stars";



interface FeedbackModalProps {
  visible: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ visible, onClose }) => {
  const { feedback, updateFeedback, resetFeedback } = useFeedback();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userid = useUserPreferences().preferences.userID

  // Handle star rating selection
  const handleRating = (rating: number) => {
    updateFeedback("feedbackRating", rating);
    console.log(rating)
  };

  // Handle comment input
  const handleCommentChange = (text: string) => {
    updateFeedback("comment", text);
  };

  // Send feedback API call
  const handleSendFeedback = async () => {
    updateFeedback("userID", userid);
    try {
      setIsSubmitting(true);
      await sendFeedback(feedback.userID, feedback.feedbackRating, feedback.comment);
      resetFeedback();
      onClose();
    } catch (error) {
      console.error("Failed to send feedback");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose} // Closes modal but keeps input
      >
        <TouchableOpacity
          style={styles.modalBody}
          activeOpacity={1} // Prevents modal from closing when tapped inside
        >
          <Text style={styles.title}>Give us your Feedback!</Text>
          <Text style={styles.subtitle}>Rate your overall experience in KU Eater</Text>

          {/* Star Rating */}
          <View style={styles.starsContainer}>
            <Stars
              touchable={true}
              size={220}
              onRatingChange={(val) => handleRating(val)}
              style={{width: 250}}
            />
          </View>

          {/* Comment Input */}
          <Text style={styles.subtitle}>Do you have any thoughts you’d like to share?</Text>
          <TextInput
            style={styles.input}
            placeholder="Write a review for KU Eater..."
            placeholderTextColor="#A2A1A1"
            value={feedback.comment}
            onChangeText={handleCommentChange}
            multiline
            maxLength={200}
          />
          <Text style={styles.charCount}>{feedback.comment.length}/200</Text>

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.button, isSubmitting && { backgroundColor: "#ccc" }]}
            onPress={handleSendFeedback}
            disabled={isSubmitting}
          >
            <Text style={styles.buttonText}>
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006664",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 13,
    color: "#3A3838",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: 250,
  },
  input: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#D0CECE",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    backgroundColor: "#F9F9F9",
  },
  charCount: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#A2A1A1",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#006664",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default FeedbackModal;
