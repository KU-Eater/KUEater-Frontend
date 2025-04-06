// SignupScreen.tsx
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Keyboard,
    Modal,
    ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons';

type SignupScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC = () => {
    const navigation = useNavigation<SignupScreenNavigationProp>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleSignup = () => {
        if (!isChecked) {
            alert("You must accept the terms and conditions to continue.");
            return;
        }
        navigation.replace('MainTab');
    };

    const handleNavigateLogin = () => {
        navigation.navigate('Login');
    };

    const sizeLogo = isKeyboardVisible ? 110 : 170;

    return (
        <SafeAreaView style={styles.container}>
            {/* Background green */}
            <View style={styles.bgContainer}>
                {/* White card container */}
                <View style={styles.cardContainer}>
                    {/* KU EATER Logo */}
                    <Image
                        source={require('../assets/logo2.png')}
                        style={{ width: sizeLogo, height: sizeLogo }}
                        resizeMode="contain"
                    />

                    {/* Sign Up Form */}
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type your Email"
                            placeholderTextColor="#BDBDBD"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <View style={styles.line} />

                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.textInputPassword}
                                placeholder="Type your password"
                                placeholderTextColor="#BDBDBD"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showConfirmPassword ? "eye-off" : "eye"}
                                    size={24}
                                    color="#777"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />

                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.textInputPassword}
                                placeholder="Type your confirm password"
                                placeholderTextColor="#BDBDBD"
                                secureTextEntry={!showConfirmPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <Ionicons
                                    name={showConfirmPassword ? "eye-off" : "eye"}
                                    size={24}
                                    color="#777"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />

                        {/* Accept Terms Checkbox */}
                        <TouchableOpacity
                            style={styles.checkboxContainer}
                            onPress={() => setIsChecked(!isChecked)}
                        >
                            <Ionicons
                                name={isChecked ? "checkbox" : "square-outline"}
                                size={24}
                                color="#0f4d41"
                            />
                            <Text style={styles.checkboxText}>
                                I accept the{' '}
                                <Text style={styles.linkText} onPress={() => setModalVisible(true)}>
                                    Terms and Conditions
                                </Text>
                            </Text>
                        </TouchableOpacity>

                        {/* Sign Up Button */}
                        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                            <Text style={styles.signupButtonText}>Let's be an Eater ➜</Text>
                        </TouchableOpacity>

                        {/* Footer: Already have an account? */}
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>I’m already an Eater? </Text>
                            <TouchableOpacity onPress={handleNavigateLogin}>
                                <Text style={styles.footerLink}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            {/* Modal for Terms & Conditions */}
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView>
                            <Text style={styles.modalTitle}>KU Eater - Terms & Conditions</Text>


                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>1. Acceptance of Terms: </Text>
                                By using KU Eater, you agree to follow these Terms & Conditions. If you do not agree, do not use our service.
                            </Text>

                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>2. User Account & Security: </Text>
                                You must provide accurate information and keep your account secure. You are responsible for any activity under your account.
                            </Text>

                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>3. Privacy & Data Protection: </Text>
                                Your personal data is protected according to our Privacy Policy. KU Eater does not sell or share your data with third parties.
                            </Text>

                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>4. Content & Usage Policy: </Text>
                                You agree to use KU Eater only for finding food on campus. Misinformation or harmful content is strictly prohibited.
                            </Text>

                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>5. Payments & Transactions: </Text>
                                KU Eater does not handle direct payments. Vendors are responsible for transactions, and users should verify their orders before paying.
                            </Text>

                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>6. Service Availability: </Text>
                                We strive for 100% uptime, but KU Eater does not guarantee uninterrupted service.
                            </Text>

                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>7. Changes to Terms: </Text>
                                These terms may be updated at any time. Continued use of KU Eater after updates means you accept the changes.
                            </Text>
                        </ScrollView>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bgContainer: {
        flex: 1,
        backgroundColor: '#0f4d41',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 20,
        paddingTop: 36,
    },
    cardContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 36,
        alignItems: 'center',
    },
    inputWrapper: {
        width: '100%',
        marginTop: 10,
    },
    label: {
        fontSize: 14,
        color: '#333333',
        marginTop: 10,
    },
    textInput: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 8,
    },
    textInputPassword: {
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    checkboxText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    linkText: {
        color: '#0f4d41',
        textDecorationLine: 'underline',
    },
    signupButton: {
        backgroundColor: '#0f4d41',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#8A8A8A',
    },
    footerLink: {
        fontSize: 14,
        color: '#0f4d41',
        textDecorationLine: 'underline',
        marginLeft: 2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#0f4d41',
    },
    modalText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'justify',
        marginBottom: 15,
    },
    modalTextBold: {
        fontWeight: 'bold', // Make the topic headers bold
        fontSize: 14,
        color: '#0f4d41', // Use KU Eater's primary color for emphasis
    },
    closeButton: {
        backgroundColor: '#0f4d41',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
