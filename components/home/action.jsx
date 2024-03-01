import { Image, StyleSheet, Text, View } from "react-native";
import icons from "../../constants/icons";
import { FONT } from "../../constants/theme";

const Action = ({style}) => {
    return ( 
        <View style = {[styles.action, style]}>
            <View style = {styles.actionItem}>
                <Image source={icons.home_departure} style={styles.icon}/>
                <Text style = {styles.text}>Vehicle</Text>
            </View>
            <View style = {styles.actionItem}>
                <Image source={icons.home_hotel} style={styles.icon}/>
                <Text style = {styles.text}>Hotel</Text>
            </View>
            <View style = {styles.actionItem}>
                <Image source={icons.home_ai} style={styles.icon}/>
                <Text style = {styles.text}>Pershot AI</Text>
            </View>
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