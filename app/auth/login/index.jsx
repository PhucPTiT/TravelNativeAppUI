import React from "react";
import { Link, Stack } from "expo-router";
import icons from '../../../constants/icons';
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../../components/ui/button";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants/theme";

const Login = () => {
    return ( 
        <View style={styles.loginPage}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTintColor: '#000',
                    headerShadowVisible: false
                }}
            />
            <View style={styles.loginForm}>
                <Text style={styles.titleForm}>Login</Text>  
                <View style={styles.inputWrap}>
                    <TextInput style={styles.inputStyle} placeholder="Username"/>
                </View>
                <View style={styles.inputWrap}>
                    <TextInput style={styles.inputStyle} placeholder="Password"/>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.forgotPassword}>
                    Forgot your password ?
                </TouchableOpacity>
                <View style={styles.wrapBtn}>
                    <TouchableOpacity variant="secondary" onPress={() => {}} style={[styles.button, styles.buttonIm]}>
                        <Image source={icons.ggIcon} style={styles.iconBuilding}/>
                        <Text style={{fontFamily: 'Montserrat_Medium',fontSize: 14, fontWeight: 600}}>Google</Text>
                    </TouchableOpacity>
                    <Button variant="primary" onPress={() => {}} style={styles.button}>
                        Login
                    </Button>
                </View>
            </View>
            <View style={styles.signupContainer}>
                <Text>Don't have an account yet ?</Text>
                <Link style = {styles.linK} href= "/auth/signup">Signup</Link>
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
        fontFamily: 'Montserrat_Medium',
        fontWeight: 700,
        marginBottom: 40,
    },
    inputWrap: {
        maxWidth: 400,
        maxHeight: 40,
        width: "100%",
        height: '100%',
        borderRadius: 30,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        borderRadius: 30,
        textAlign: 'center',
        backgroundColor: COLORS.white
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 12,
        fontWeight: 300,
        fontFamily: 'Montserrat_Medium'
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
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    linK: {
        color: COLORS.primary,
        fontWeight: 600,
    }
});
