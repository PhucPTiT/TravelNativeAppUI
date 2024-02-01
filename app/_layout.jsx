import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_Italic : require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
        Montserrat_Medium : require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    });
    
    if (!fontsLoaded) {
    return null;
    }
    return ( <>
        <Slot/>
    </> );
}
 
export default RootLayout;