import React from "react";
import { Image, StyleSheet, ImageStyle } from "react-native";
import { useUserPreferences } from "../context/UserPreferencesContext";

interface ProfilePictureProps {
  size?: number;
  style?: ImageStyle;
  role?: string | null;
  gender?: string | null;
}

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

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  size = 120,
  style,
  role,
  gender,
}) => {
  const { preferences } = useUserPreferences();

  const finalRole = role || preferences.role || "default";
  const finalGender = gender ? ` ${gender}` : preferences.gender ? ` ${preferences.gender}` : "";
  const imageKey = `${finalRole}${finalGender}`;
  const imageSource = profilePics[imageKey] || profilePics["default"];

  return (
    <Image
      source={imageSource}
      style={[
        styles.profileImage,
        { width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  profileImage: {
    borderWidth: 3,
    borderColor: "#FFF",
  },
});

export default ProfilePicture;
