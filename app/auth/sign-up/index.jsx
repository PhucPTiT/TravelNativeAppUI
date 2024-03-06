import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import { Alert, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../../components/ui/button";
import icons from "../../../constants/icons";
import { COLORS, SHADOWS } from "../../../constants/theme";
import * as Yup from "yup"
import { Formik } from "formik";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too short!')
            .max(20, 'Too long!')
            .required('Please enter your first name.'),
        lastName: Yup.string()
            .min(2, 'Too short!')
            .max(20, 'Too long!')
            .required('Please enter your last name.'),
        mail: Yup.string()
            .email('Invalid Email')
            .required('Please enter your email.'),
        password: Yup.string()
            .min(8)
            .required('Please enter your password.')
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
            )
    })
    const onSubmit = (values) => {
        Alert.alert()
        console.log(JSON.stringify(values))
    }
    return ( 
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                mail: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => onSubmit(values)}
        >
            {({values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit}) => (
                <View style = {styles.signupPage}>
                    <Stack.Screen
                        options={{
                            headerStyle: { backgroundColor: 'rgb(242,242,242)' },
                            headerTintColor: '#000',
                            headerShadowVisible: false
                        }}
                    />
                    <View style = {styles.signupForm}>
                        <Text style = {styles.titleForm}>
                            Sign up
                        </Text>
                        <TouchableOpacity variant="secondary" onPress={() =>    {}} style={[styles.button, styles.buttonIm]}>
                            <Image source={icons.ggIcon} />
                            <Text style={{fontFamily: 'Montserrat_Medium',fontSize: 14, fontWeight: 600}}>Google</Text>
                        </TouchableOpacity>
                        <Text style = {styles.textOptions}>Or Sign up using</Text>
                        <View style = {styles.formData}>
                            <View style={styles.inputWrap}>
                                <TextInput 
                                    placeholderTextColor={'gray'} 
                                    style={styles.inputStyle} 
                                    placeholder="First Name" 
                                    value={values.firstName} 
                                    onChangeText={handleChange('firstName')}
                                    onBlur={() => setFieldTouched('firstName')}
                                />
                            </View>
                            {touched.firstName && errors.firstName ? (
                                <Text style = {styles.textError}>{errors.firstName}</Text>
                            ) : null}
                            <View style={styles.inputWrap}>
                                <TextInput 
                                    placeholderTextColor={'gray'} 
                                    style={styles.inputStyle} 
                                    placeholder="Last Name"
                                    value={values.lastName} 
                                    onChangeText={handleChange('lastName')}
                                    onBlur={() => setFieldTouched('lastName')}
                                />
                            </View>
                            {touched.lastName && errors.lastName ? (
                                <Text style = {styles.textError}>{errors.lastName}</Text>
                            ) : null}
                            <View style={styles.inputWrap}>
                                <TextInput 
                                    placeholderTextColor={'gray'} 
                                    style={styles.inputStyle} 
                                    placeholder="Mail"
                                    value={values.mail} 
                                    onChangeText={handleChange('mail')}
                                    onBlur={() => setFieldTouched('mail')}
                                />
                            </View>
                            {touched.mail && errors.mail ? (
                                <Text style = {styles.textError}>{errors.mail}</Text>
                            ) : null}
                            <View style={styles.inputWrap}>
                                <TextInput 
                                    secureTextEntry={showPassword} 
                                    placeholderTextColor={'gray'} 
                                    style={styles.inputStyle} 
                                    placeholder="Password"
                                    value={values.password} 
                                    onChangeText={handleChange('password')}
                                    onBlur={() => setFieldTouched('password')}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eye}>
                                    <Image source={showPassword ? icons.eye : icons.eyeActive} />
                                </TouchableOpacity>
                            </View>
                            {touched.password && errors.password ? (
                                <Text style = {styles.textError}>{errors.password}</Text>
                            ) : null}
                            <Link href="" style={styles.forgotPassword}>
                                Forgot your password ?
                            </Link>
                            <Button variant="primary" onPress={handleSubmit} style = {styles.buttonSignup} disabled={!isValid}>
                                Sign up
                            </Button>
                        </View>
                    </View>
                    <View style={styles.loginContainer}>
                        <Text>Already have an account ?</Text>
                        <Link style = {styles.linK} href= "/auth/login"> Sign in</Link>
                    </View>
                </View>
            )}
        </Formik>
    );
}
 
export default Signup;

const styles = StyleSheet.create({
    signupPage: {
        flex: 1,
        alignItems: 'center',
    },
    signupForm: {
        flex: 1,
        padding: 30,
        width: '100%'
    },
    titleForm: {
        textAlign: 'left',
        fontSize: 30,
        fontFamily: 'Montserrat_Bold',
        marginBottom: 40,
    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        ...SHADOWS.all
    },
    buttonIm: {
        backgroundColor: COLORS.secondary,
        color: COLORS.black,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 12,
        marginBottom: 36,
    },
    textOptions: {
        fontSize: 12,
        fontFamily: 'Montserrat_Mediu',
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 36,
    },
    inputWrap: {
        maxWidth: 400,
        maxHeight: 50,
        width: "100%",
        height: '100%',
        borderRadius: 30,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        borderRadius: 30,
        textAlign: 'left',
        backgroundColor: COLORS.white,
        paddingLeft: 44,
        ...SHADOWS.all
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 12,
        fontFamily: 'Montserrat_Thin'
    },
    buttonSignup: {
        borderRadius: 30,
        maxHeight: 50,
        height: '100%',
        marginTop: 32,
        ...SHADOWS.all
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 24,
    },
    linK: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    eye: {
        position: 'absolute',
        right: 12,
        top: 14,
    },
    textError: {
        marginTop: -10,
        marginBottom: 10,
        paddingLeft: 12,
        fontFamily: 'Montserrat_MediuItalic',
        fontSize: 12,
        color: COLORS.error,
    }
});
