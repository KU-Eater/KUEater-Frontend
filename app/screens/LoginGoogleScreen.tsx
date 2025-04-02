import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Modal,
    ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { useUserPreferences } from '../context/UserPreferencesContext';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { checkUserExists } from '../api/userPreferencesApi';
import { CodeChallengeMethod, ResponseType } from 'expo-auth-session/build/AuthRequest.types';
import { performAuth } from '../api/services/authService';
import { ACCESS_TOKEN_PATH, getBackendClient } from '../api/grpcClient';
import { AccountReadinessRequest, AccountReadinessResponse } from '../generated/data/main_pb';
import { RpcError } from 'grpc-web';
WebBrowser.maybeCompleteAuthSession();

type LoginGoogleScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginGoogle'>;

const LoginGoogleScreen: React.FC = () => {
    const navigation = useNavigation<LoginGoogleScreenNavigationProp>();
    const [modalVisible, setModalVisible] = useState(false);

    const { preferences, updatePreferences } = useUserPreferences();
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
        redirectUri: 'http://localhost:8888',
        scopes: ['email', 'openid'],
        responseType: ResponseType.Code,
        shouldAutoExchangeCode: false,
        usePKCE: false
    });

    const [ authError, setAuthError ] = useState<string>("");

    useEffect(() => {
        if (response?.type === 'success') {
            const code = response.params.code;
            performAuth(code).then(
                (_) => {
                    // Login successful
                    // TODO: Fire and check if profile is complete, if not navigate to collect username
                    // if true, navigate to home screen
                    getBackendClient().then(
                        (obj) => {
                            const { client, header } = obj;
                            client.accountReadiness(
                                new AccountReadinessRequest(),
                                header, (err: RpcError, response: AccountReadinessResponse) => {
                                    if (err) {
                                        console.error(err);
                                        setAuthError(err.message);
                                    } else {
                                        const ready: boolean = response.getReady()
                                        if (!ready) {
                                            navigation.navigate('CollectUsername');
                                        } else {
                                            navigation.replace('MainTab');
                                        }
                                    }
                                }
                            )
                        }
                    )
                }, (reason) => {
                    setAuthError(reason);
                }
            )
        }
    }, [response]);

    const handleGoogleLogin = async () => {
        await promptAsync();
      };


    return (
        <SafeAreaView style={styles.container}>
            {/* ส่วนพื้นหลังสีเขียวเข้ม */}
            <View style={styles.bgContainer}>
                {/* กล่องสีขาวตรงกลาง */}
                <View style={styles.cardContainer}>
                    {/* โลโก้ KU EATER */}
                    <Image
                        source={require('../assets/logo_signin.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <View style={styles.wrapper}>
                        {/* ปุ่ม Login with Google (มีโลโก้ Google) */}
                        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                            <View style={styles.googleButtonInner}>
                                <Image
                                    source={require('../assets/google_logo.png')} // ปรับ path ให้ตรงกับที่มีไฟล์จริง
                                    style={styles.googleIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.googleButtonText}>Sign In with Google</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Terms & Conditions */}
                        <Text style={styles.termsText}>
                            By tapping “Sign in”, you agree to our{' '}
                            <Text style={styles.termsLink} onPress={() => setModalVisible(true)}>
                                Terms and Conditions.
                            </Text>
                        </Text>
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

export default LoginGoogleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // ให้ SafeArea มีพื้นหลังขาว (หรือโปร่งแสง)
    },
    bgContainer: {
        flex: 1,
        backgroundColor: '#0f4d41', // สีเขียวเข้มด้านข้าง
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 20,
        paddingTop: 36,
    },
    cardContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff', // กล่องสีขาว
        borderRadius: 12,
        paddingVertical: 100,
        paddingHorizontal: 36,
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 100,
    },
    wrapper: {
        width: '100%',
        marginTop: 10,
    },
    googleButton: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 18,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    googleButtonInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    googleButtonText: {
        color: '#0f4d41',
        fontSize: 17,
        fontWeight: '600',
    },
    termsText: {
        fontSize: 14,
        color: '#8A8A8A',
        marginTop: 20,
        textAlign: 'center',
    },
    termsLink: {
        color: '#0f4d41',
        textDecorationLine: 'underline',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        paddingVertical: 50,
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
