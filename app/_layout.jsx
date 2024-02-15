import { Slot, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_Italic : require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
        Montserrat_Medium : require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    });
    
    if (!fontsLoaded) {
    return null;
    }
    return ( <Stack>
                <Stack.Screen name = "auth/index" options={{headerShown: false}}/>
                <Stack.Screen name = "auth/login/index" options={{title: false}}/>
                <Stack.Screen name = "auth/sign-up/index" options={{headerShown: false}}/>
            </Stack> );
}
 
export default RootLayout;