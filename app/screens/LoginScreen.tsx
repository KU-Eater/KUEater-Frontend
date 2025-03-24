// LoginScreen.tsx
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // ตัวอย่างเมื่อ login เสร็จ ให้ไปหน้า MainTab หรือหน้าอื่น
        navigation.replace('MainTab');
    };

    const handleNavigateSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* ส่วนพื้นหลังสีเขียวเข้ม */}
            <View style={styles.bgContainer}>
                {/* กล่องสีขาวตรงกลาง */}
                <View style={styles.cardContainer}>
                    {/* โลโก้ KU EATER */}
                    <Image
                        source={require('../assets/logo2.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    {/* ฟอร์ม Login */}
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Username or Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type your username or Email"
                            placeholderTextColor="#BDBDBD"
                            value={usernameOrEmail}
                            onChangeText={setUsernameOrEmail}
                        />
                        <View style={styles.line} />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type your password"
                            placeholderTextColor="#BDBDBD"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        <View style={styles.line} />

                        <TouchableOpacity style={styles.forgotPasswordBtn}>
                            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
                        </TouchableOpacity>

                        {/* ปุ่ม Login */}
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                        {/* ปุ่ม Login with Google (มีโลโก้ Google) */}
                        <TouchableOpacity style={styles.googleButton}>
                            <View style={styles.googleButtonInner}>
                                <Image
                                    source={require('../assets/google_logo.png')} // ปรับ path ให้ตรงกับที่มีไฟล์จริง
                                    style={styles.googleIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.googleButtonText}>Login with Google</Text>
                            </View>
                        </TouchableOpacity>

                        {/* ด้านล่าง: New Eater? Create Account */}
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>New Eater? </Text>
                            <TouchableOpacity onPress={handleNavigateSignup}>
                                <Text style={styles.footerLink}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

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
        paddingVertical: 20,
        paddingHorizontal: 36,
        alignItems: 'center',
    },
    logo: {
        width: 170,
        height: 170,
        marginBottom: 15,
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
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginBottom: 20,
    },
    forgotPasswordBtn: {
        alignSelf: 'flex-end',
        marginTop: -10,
        marginBottom: 20,
    },
    forgotPasswordText: {
        fontSize: 12,
        color: '#8A8A8A',
    },
    loginButton: {
        backgroundColor: '#0f4d41',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 80,

    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    googleButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
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
});
