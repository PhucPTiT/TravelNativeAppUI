import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { COLORS, FONT } from "../../constants/theme";

const ChooseVehilce = () => {
    const [isEnabledPlane, setIsEnabledPlane] = useState(true);
    const [isEnabledSleeperBus, setIsEnabledSleeperBus] = useState(false);
    const [isEnabledTrain, setIsEnabledTrain] = useState(false);
    const [isEnabledShip, setIsEnabledShip] = useState(false);
    const [isEnabledMotobike, setIsEnabledMotobike] = useState(false);
    const [isEnabledBike, setIsEnabledBike] = useState(false);

    const toggleSwitchPlane = () => setIsEnabledPlane(previousState => !previousState);
    const toggleSwitchSleeperBus = () => setIsEnabledSleeperBus(previousState => !previousState);
    const toggleSwitchTrain = () => setIsEnabledTrain(previousState => !previousState);
    const toggleSwitchShip = () => setIsEnabledShip(previousState => !previousState);
    const toggleSwitchMotobike = () => setIsEnabledMotobike(previousState => !previousState);
    const toggleSwitchBike = () => setIsEnabledBike(previousState => !previousState);

    return ( 
        <View>
            <Text style = {[styles.text, styles.text2 ]} >Vehicle Type</Text>
            <View style = {styles.row}>
                <Text style = {styles.text}>Plane</Text>
                <Switch
                    trackColor={{false: "#DFE6E9", true: COLORS.primary}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchPlane}
                    value={isEnabledPlane}
                />
            </View>
            <View style = {styles.row}>
                <Text style = {styles.text}>Sleeper Bus</Text>
                <Switch
                    trackColor={{false: "#DFE6E9", true: COLORS.primary}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchSleeperBus}
                    value={isEnabledSleeperBus}
                />
            </View>
            <View style = {styles.row}>
                <Text style = {styles.text}>Train</Text>
                <Switch
                    trackColor={{false: "#DFE6E9", true: COLORS.primary}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchTrain}
                    value={isEnabledTrain}
                />
            </View>
            <View style = {styles.row}>
                <Text style = {styles.text}>Ship</Text>
                <Switch
                    trackColor={{false: "#DFE6E9", true: COLORS.primary}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchShip}
                    value={isEnabledShip}
                />
            </View>
            <View style = {styles.row}>
                <Text style = {styles.text}>Motobike</Text>
                <Switch
                    trackColor={{false: "#DFE6E9", true: COLORS.primary}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchMotobike}
                    value={isEnabledMotobike}
                />
            </View>
            <View style = {styles.row}>
                <Text style = {styles.text}>Bike</Text>
                <Switch
                    trackColor={{false: "#DFE6E9", true: COLORS.primary}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchBike}
                    value={isEnabledBike}
                />
            </View>
        </View>
     );
}
 
export default ChooseVehilce;
const styles = StyleSheet.create({
    chooseVehicle: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    text: {
        fontFamily: FONT.semibold, 
        fontSize: 14, 
        color: COLORS.black
    },
    text2: {
        color: COLORS.gray3,
        marginBottom: 8,
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    }
})