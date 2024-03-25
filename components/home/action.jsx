import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { FONT } from "../../constants/theme";
import { router } from "expo-router";

const Action = ({ style }) => {

    const handleHotelPress = () => {
        router.push("hotel")
    }

    const handleVehiclePress = () => {
        router.push("bookvehicle")
    }
    const handlePershotPress = () => {
        router.push("ai")
    }

    return (
        <View style={[styles.action, style]}>
            <TouchableOpacity onPress={handleVehiclePress} style={styles.actionItem}>
                <Image source={icons.home_departure} style={styles.icon} />
                <Text style={styles.text}>Vehicle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHotelPress} style={styles.actionItem}>
                <Image source={icons.home_hotel} style={styles.icon} />
                <Text style={styles.text}>Hotel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {handlePershotPress} style={styles.actionItem}>
                <Image source={icons.home_ai} style={styles.icon} />
                <Text style={styles.text}>Pershot AI</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginVertical: 12,
    },
    actionItem: {

    },
    icon: {

    },
    text: {
        marginTop: 4,
        fontFamily: FONT.medium,
        fontSize: 14,
        textAlign: 'center',
    },
})

export default Action;