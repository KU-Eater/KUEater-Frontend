import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

type InformationModalProps = {
  paragraphs: string[]; // 🔥 บังคับ
  visible?: boolean;
  onClose?: () => void;
  title?: string;
  buttonLabel?: string;

  // Optional custom styles
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  paragraphStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
};

const InformationModal: React.FC<InformationModalProps> = ({
  paragraphs,
  visible = false,
  onClose = () => {},
  title = "",
  buttonLabel = "OK",
  containerStyle,
  titleStyle,
  paragraphStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.modalBody, containerStyle]}>
          {title !== "" && (
            <Text style={[styles.modalTitle, titleStyle]}>{title}</Text>
          )}

          {paragraphs.map((text, index) => (
            <Text key={index} style={[styles.modalText, paragraphStyle]}>
              {text}
            </Text>
          ))}

          <TouchableOpacity style={[styles.closeButton, buttonStyle]} onPress={onClose}>
            <Text style={[styles.closeButtonText, buttonTextStyle]}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006664",
    marginBottom: 15,
    textAlign: "center",
  },
  modalText: {
    fontSize: 14,
    color: "#006664",
    textAlign: "left",
    marginBottom: 20,
    lineHeight: 20,
  },
  closeButton: {
    backgroundColor: "#006664",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InformationModal;
