import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import icons from '../../../constants/icons';
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../../components/ui/button";
import { TouchableOpacity } from "react-native";
import { COLORS, FONT, SHADOWS } from "../../../constants/theme";

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handellogin = () => {
        router.push("/page/home")
    }

    return (
        <View style={styles.loginPage}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'rgb(242,242,242)' },
                    headerTintColor: '#000',
                    headerShadowVisible: false
                }}
            />
            <View style={styles.loginForm}>
                <Text style={styles.titleForm}>Login</Text>
                <View style={styles.inputWrap}>
                    <TextInput textDecorationLine="none" placeholderTextColor={'gray'} style={styles.inputStyle} placeholder="Username" />
                </View>
                <View style={styles.inputWrap}>
                    <TextInput secureTextEntry={showPassword} placeholderTextColor={'gray'} style={styles.inputStyle} placeholder="Password" />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eye}>
                        <Image source={showPassword ? icons.eye : icons.eyeActive} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { }} style={styles.forgotPassword}>
                    <Text style={{ fontFamily: 'Montserrat_Regular', fontSize: 12, textAlign: "right" }}>Forgot your password ?</Text>
                </TouchableOpacity>
                <View style={styles.wrapBtn}>
                    <TouchableOpacity variant="secondary" onPress={() => { }} style={[styles.button, styles.buttonIm]}>
                        <Image source={icons.ggIcon} style={styles.iconBuilding} />
                        <Text style={{ fontFamily: 'Montserrat_SemiBold', fontSize: 14 }}>Google</Text>
                    </TouchableOpacity>
                    <Button variant="primary" onPress={handellogin} style={styles.button}>
                        Login
                    </Button>
                </View>
            </View>
            <View style={styles.signupContainer}>
                <Text>Don't have an account yet ?</Text>
                <Link style={styles.linK} href="/auth/sign-up">Signup</Link>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        alignItems: 'center',
    },
    loginForm: {
        flex: 1,
        padding: 10,
        marginTop: 100,
        width: '80%'
    },
    titleForm: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat_Bold',
        marginBottom: 40,
    },
    inputWrap: {
        maxWidth: 400,
        maxHeight: 50,
        width: "100%",
        height: '100%',
        borderRadius: 30,
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        borderRadius: 30,
        textAlign: 'center',
        backgroundColor: COLORS.white,
        ...SHADOWS.all
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 12,
        fontFamily: 'Montserrat_Light'
    },
    wrapBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        marginTop: 32
    },
    button: {
        height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        ...SHADOWS.all
    },
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 24,
    },
    iconBuilding: {
        width: 33,
        height: 33,
        marginRight: 8,
    },
    buttonIm: {
        backgroundColor: COLORS.secondary,
        color: COLORS.black,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    linK: {
        color: COLORS.primary,
        fontFamily: FONT.semibold,
    },
    eye: {
        position: 'absolute',
        right: 12,
        top: 14,
    }
});
