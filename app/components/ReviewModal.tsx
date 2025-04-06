import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Stars from "./Stars";

interface ReviewModalProps {
  visible: boolean;
  onClose: () => void;
  stallName: string;
  onSubmit: (rating: number, comment: string) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  visible,
  onClose,
  stallName,
  onSubmit,
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          {/* ปุ่ม X ปิด */}
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close" size={24} color="#888" />
          </TouchableOpacity>

          {/* หัวข้อ */}
          <Text style={styles.title}>Rating and Review</Text>
          <Text style={styles.stallName}>{stallName}</Text>

          {/* ดาว */}
          <Stars
            touchable
            size={220}
            onRatingChange={(val) => setRating(val)}
            style={{ marginBottom: 24 ,gap:10,justifyContent: "center"}}
          />

          {/* กล่อง Comment */}
          <TextInput
            style={styles.input}
            placeholder="Write a review for this stall …"
            placeholderTextColor="#A2A1A1"
            multiline
            maxLength={200}
            value={comment}
            onChangeText={setComment}
          />
          <Text style={styles.charCount}>{comment.length}/200</Text>

          {/* ปุ่มโพสต์ */}
          <TouchableOpacity
            style={[styles.button, !rating && { backgroundColor: "#ccc" }]}
            onPress={handleSubmit}
            disabled={!rating}
          >
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    paddingTop: 35,
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#006664",
    marginBottom: 4,
  },
  stallName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
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
    marginTop: 8,
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
    textAlign: "center",
  },
});

export default ReviewModal;
