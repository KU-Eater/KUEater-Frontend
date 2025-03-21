import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useUserPreferences } from "../context/UserPreferencesContext";
import { Ionicons } from "@expo/vector-icons";
import FeedbackModal from "../components/FeedbackModal";

type AccountScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Account">;

const AccountScreen = () => {
  const { preferences } = useUserPreferences();
  const navigation = useNavigation<AccountScreenNavigationProp>();
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");


  const profilePics: { [key: string]: any } = {
    "KU Student Male": require("../assets/roles/ku_student_m.png"),
    "KU Student Female": require("../assets/roles/ku_student_f.png"),
    "KU Student": require("../assets/roles/ku_student.png"),
    "Exchange Student Male": require("../assets/roles/exchange_student_m.png"),
    "Exchange Student Female": require("../assets/roles/exchange_student_f.png"),
    "Exchange Student": require("../assets/roles/exchange_student.png"),
    "KU Professor Male": require("../assets/roles/ku_professor_m.png"),
    "KU Professor Female": require("../assets/roles/ku_professor_f.png"),
    "KU Professor": require("../assets/roles/ku_professor.png"),
    "KU Staff Male": require("../assets/roles/ku_staff_m.png"),
    "KU Staff Female": require("../assets/roles/ku_staff_f.png"),
    "KU Staff": require("../assets/roles/ku_staff.png"),
    "Guest Male": require("../assets/roles/guest_m.png"),
    "Guest Female": require("../assets/roles/guest_f.png"),
    "Guest": require("../assets/roles/guest.png"),
    "default": require("../assets/roles/default_profile.png"),
  };
  
  const getProfilePic = () => {
    const role = preferences.role || "default";
    const gender = preferences.gender ? ` ${preferences.gender}` : "";
    return profilePics[`${role}${gender}`] || profilePics["default"];
  };
  

  const handlePersonalProfile = () => { navigation.navigate("PersonalProfile") };
  const handleFoodPreferences = () => { navigation.navigate("FoodPreferences") };
  const handleAboutUs = () => { };
  const handleFeedback = () => { setFeedbackModalVisible(true) };
  const handleLogout = () => { navigation.navigate("LoginGoogle") };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require("../assets/account_screen_bg.png")} style={styles.bgImage} />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={getProfilePic()} style={styles.profileImage} />
        <Text style={styles.username}>{preferences.username}</Text>
        <Text style={styles.userRole}>{preferences.role}</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.line} />
      <TouchableOpacity style={styles.menuItem} onPress={handlePersonalProfile}>
        <Ionicons name="person-outline" size={24} color="#A2A1A1" />
        <Text style={styles.menuText}>Personal Profile</Text>
        <View style={styles.chevron}>
          <Ionicons name="chevron-forward-outline" size={22} color="#A2A1A1" />
        </View>
      </TouchableOpacity>

      <View style={styles.line} />
      <TouchableOpacity style={styles.menuItem} onPress={handleFoodPreferences}>
        <Ionicons name="fast-food-outline" size={24} color="#A2A1A1" />
        <Text style={styles.menuText}>Food Preferences</Text>
        <View style={styles.chevron}>
          <Ionicons name="chevron-forward-outline" size={22} color="#A2A1A1" />
        </View>
      </TouchableOpacity>

      <View style={styles.line} />
      <TouchableOpacity style={styles.menuItem} onPress={handleAboutUs}>
        <Ionicons name="information-circle-outline" size={24} color="#A2A1A1" />
        <Text style={styles.menuText}>About Us</Text>
        <View style={styles.chevron}>
          <Ionicons name="chevron-forward-outline" size={22} color="#A2A1A1" />
        </View>
      </TouchableOpacity>

      <View style={styles.line} />
      <TouchableOpacity style={styles.menuItem} onPress={handleFeedback}>
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#A2A1A1" />
        <Text style={styles.menuText}>Feedback</Text>
        <View style={styles.chevron}>
          <Ionicons name="chevron-forward-outline" size={22} color="#A2A1A1" />
        </View>
      </TouchableOpacity>

      <View style={styles.line} />
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#B00020" />
        <Text style={styles.logoutText}>Log out</Text>
        <View style={styles.chevron}>
          <Ionicons name="chevron-forward-outline" size={22} color="#B00020" />
        </View>
      </TouchableOpacity>
      <View style={styles.line} />

      <FeedbackModal visible={feedbackModalVisible} onClose={() => setFeedbackModalVisible(false)} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: 325,
    top: 0,
    marginBottom: 40,
  },
  profileSection: {
    alignItems: "center",
    marginTop: 80,
    position: "absolute"
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
    elevation: 5,
  },
  userRole: {
    fontSize: 14,
    color: "#D9D9D9",
    marginTop: 5,
  },
  line: {
    height: 1, // Thin line
    backgroundColor: '#D9D9D9', // Line color
    width: '95%', // Full width
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    paddingVertical: 24,
    paddingHorizontal: 22,
    backgroundColor: "#FFF",
    marginTop: 0,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: "##3A3838",
  },
  logoutText: {
    fontSize: 16,
    color: "#B00020",
    marginLeft: 15,
  },
  chevron: {
    marginLeft: "auto",

  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 200,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  feedbackInput: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#CCC",
    width: "45%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default AccountScreen;
