import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../App";
import { useUserPreferences } from "../context/UserPreferencesContext";
import ProfilePicture from "../components/ProfilePicture";


type PersonalProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PersonalProfile"
>;

const PersonalProfileScreen = () => {
  const navigation = useNavigation<PersonalProfileScreenNavigationProp>();
  const { preferences, updatePreferences } = useUserPreferences();

  const [username, setUsername] = useState(preferences.username);
  const [email] = useState(preferences.gmail);
  const [role, setRole] = useState(preferences.role);
  const [gender, setGender] = useState(preferences.gender);

  const [isSaved, setIsSaved] = useState(true);

  // Modals
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [genderInfoModalVisible, setGenderInfoModalVisible] = useState(false);

  // Options
  const roleOptions = ["KU Student", "Exchange Student", "KU Professor", "KU Staff", "Guest"];
  const genderOptions = ["Female", "Male", "Non-Binary", "Prefer not to say"];

  const genderAskReason1 =
    "      KU Eater collects your gender information for statistical analysis, such as understanding potential differences in eating preferences and habits among various demographic groups.";
  const genderAskReason2 =
    "     The insights from this data will help us improve our menu recommendations and create a more personalized experience for all users.";
  const genderAskReason3 =
    "     Please rest assured that your data will be handled responsibly and securely, with respect for your privacy at all times. •ᴗ• ";

  // Track changes to update the 'Saved' button state
  useEffect(() => {
    // Has the user changed any field?
    const hasChanges =
      username !== (preferences.username || "") ||
      role !== (preferences.role || "") ||
      gender !== (preferences.gender || "");

    // Is username valid (non-empty)?
    const isUsernameValid = username.trim() !== "";

    // If no changes OR invalid username => keep button disabled
    setIsSaved(!hasChanges || !isUsernameValid);
  }, [username, role, gender]);


  // Handler to save changes
  const handleSave = () => {
    updatePreferences("username", username);
    updatePreferences("role", role);
    updatePreferences("gender", gender);
    setIsSaved(true);
  };

  const saveWord = isSaved ? "Saved" : "Save"

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={24} color="#006664" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Personal Profile</Text>

        {/* Save Button + Icon */}
        <TouchableOpacity
          onPress={handleSave}
          disabled={isSaved}
          style={styles.headerRight}
        >
          <Ionicons
            name="checkmark-outline"
            size={17}
            style={{ marginRight: 5 }}
            color={isSaved ? "#aaa" : "#006664"}
          />
          <Text style={[styles.saveButton, !isSaved && { color: "#006664" }]}>
            {saveWord}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <ProfilePicture size={120} style={{borderColor: "#3A3838",borderWidth: 2}}/>
      </View>

      {/* Username Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputWithCounter}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            maxLength={30}
            placeholder="Enter your name"
            placeholderTextColor="#D8D7D7"
          />
          <Text style={styles.counter}>
            {username.length}/30
          </Text>
        </View>
      </View>

      {/* Email Field (read-only) */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={[styles.inputWithCounter, { backgroundColor: "#eee" }]}>
          <TextInput
            style={styles.input}
            value={email}
            editable={false}
          />
        </View>
      </View>

      {/* Role Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Role</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setRoleModalVisible(true)}>
          <Text style={{ color: role ? "#000" : "#D8D7D7" }}>
            {role || "Select your role"}
          </Text>
          <Ionicons name="chevron-down" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Gender Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setGenderModalVisible(true)}>
          <Text style={{ color: gender ? "#000" : "#D8D7D7" }}>
            {gender || "Select your gender"}
          </Text>
          <Ionicons name="chevron-down" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Why we ask your gender link */}
      <TouchableOpacity onPress={() => setGenderInfoModalVisible(true)}>
        <Text style={styles.genderInfo}>Why we ask your gender?</Text>
      </TouchableOpacity>

      {/* Gender Info Modal */}
      <Modal visible={genderInfoModalVisible} transparent animationType="fade">
        <View style={styles.genderInfoOverlay}>
          <View style={styles.genderInfoBody}>
            <Text style={styles.genderInfoTitle}>Why we ask your gender?</Text>
            <Text style={styles.genderInfoText}>{genderAskReason1}</Text>
            <Text style={styles.genderInfoText}>{genderAskReason2}</Text>
            <Text style={styles.genderInfoText}>{genderAskReason3}</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setGenderInfoModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Role Selection Modal */}
      <Modal visible={roleModalVisible} transparent animationType="fade">
        {/* Outer Touchable closes the modal */}
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setRoleModalVisible(false)}
        >
          {/* Inner Touchable (modal body) prevents the modal from closing if tapped */}
          <TouchableOpacity
            style={styles.modalBody}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.modalTitle}>Which one describes you the best?</Text>
            {roleOptions.map((item) => {
              const isSelected = role === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[styles.modalOption, isSelected && styles.selectedOption]}
                  onPress={() => {
                    setRole(item);
                    // stay open after selecting, close only on outside tap
                  }}
                >
                  <Text style={[styles.optionText, isSelected && { color: "#006664" }]}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Gender Selection Modal */}
      <Modal visible={genderModalVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setGenderModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalBody}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.modalTitle}>Which one describes you the best?</Text>
            {genderOptions.map((item) => {
              const isSelected = gender === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[styles.modalOption, isSelected && styles.selectedOption]}
                  onPress={() => {
                    setGender(item);
                    // stay open after selecting, close only on outside tap
                  }}
                >
                  <Text style={[styles.optionText, isSelected && { color: "#006664" }]}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

/* =================================
       STYLES
================================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  /* Header Styles */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: "#fff",
    elevation: 2,
  },
  headerLeft: {
    width: 50,
  },
  headerTitle: {
    flex: 1,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  headerRight: {
    width: 70,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  saveButton: {
    fontSize: 15,
    color: "#aaa",
    fontWeight: "bold",
  },
  /* Profile Section Styles */
  profileSection: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  editIcon: {
    backgroundColor: "#eee",
    borderRadius: 15,
    padding: 5,
  },
  /* Form Input Styles */
  inputContainer: {
    marginHorizontal: 30,
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#8A8686",
  },
  inputWithCounter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    color: "#000",
  },
  counter: {
    fontSize: 12,
    color: "#999",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  genderInfo: {
    textAlign: "right",
    marginRight: 20,
    marginTop: -5,
    color: "#888",
    textDecorationLine: "underline",
  },
  /* Modal Styles */
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
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006664",
    marginBottom: 20,
    textAlign: "center",
  },
  modalOption: {
    width: "100%",
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 30,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  selectedOption: {
    borderWidth: 1.5,
    borderColor: "#006664",
    backgroundColor: "#F2F2F2",
    color: "#006664"
  },
  optionText: {
    fontSize: 15,
    color: "#3A3838",
    fontWeight: "bold",
  },
  /* Gender Info Modal */
  genderInfoOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  genderInfoBody: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: "center",
  },
  genderInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006664",
    marginBottom: 15,
    textAlign: "center",
  },
  genderInfoText: {
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

export default PersonalProfileScreen;
