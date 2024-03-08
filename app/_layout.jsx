import { Slot, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import NavBar from "../components/navigation";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_Thin: require("../assets/fonts/static/Montserrat-Thin.ttf"),
        Montserrat_ThinItalic: require("../assets/fonts/static/Montserrat-ThinItalic.ttf"),
        Montserrat_ExtraLight: require("../assets/fonts/static/Montserrat-ExtraLight.ttf"),
        Montserrat_ExtraLightItalic: require("../assets/fonts/static/Montserrat-ExtraLightItalic.ttf"),
        Montserrat_Light: require("../assets/fonts/static/Montserrat-Light.ttf"),
        Montserrat_LightItalic: require("../assets/fonts/static/Montserrat-LightItalic.ttf"),
        Montserrat_Regular: require("../assets/fonts/static/Montserrat-Regular.ttf"),
        Montserrat_Italic: require("../assets/fonts/static/Montserrat-Italic.ttf"),
        Montserrat_Mediu: require("../assets/fonts/static/Montserrat-Medium.ttf"),
        Montserrat_MediuItalic: require("../assets/fonts/static/Montserrat-MediumItalic.ttf"),
        Montserrat_SemiBold: require("../assets/fonts/static/Montserrat-SemiBold.ttf"),
        Montserrat_SemiBoldItalic: require("../assets/fonts/static/Montserrat-SemiBoldItalic.ttf"),
        Montserrat_Bold: require("../assets/fonts/static/Montserrat-Bold.ttf"),
        Montserrat_BoldItalic: require("../assets/fonts/static/Montserrat-BoldItalic.ttf"),
        Montserrat_ExtraBold: require("../assets/fonts/static/Montserrat-ExtraBold.ttf"),
        Montserrat_ExtraBoldItalic: require("../assets/fonts/static/Montserrat-ExtraBoldItalic.ttf"),
        Montserrat_Black: require("../assets/fonts/static/Montserrat-Black.ttf"),
        Montserrat_BlackItalic: require("../assets/fonts/static/Montserrat-BlackItalic.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Stack>
            <Stack.Screen name="auth/index" options={{ headerShown: false }} />
            <Stack.Screen name="auth/login/index" options={{ title: '' }} />
            <Stack.Screen name="auth/sign-up/index" options={{ title: '' }} />
            <Stack.Screen name="home/index" options={{ headerShown: false }} />
            <Stack.Screen name="user/index" options={{ headerShown: false }} />
            <Stack.Screen name="setting/index" options={{ title: '' }} />
            <Stack.Screen name="user/changePassword/index" options={{ title: '' }} />
            <Stack.Screen name="user/edit/index" options={{ title: '' }} />
        </Stack>
    );
}

export default RootLayout;