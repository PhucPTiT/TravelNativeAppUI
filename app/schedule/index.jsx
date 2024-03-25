import { Stack, router } from "expo-router";
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/ui/button";
import icons from "../../constants/icons";
import Item from "../../components/shedule/item";
import { COLORS, FONT, SHADOWS } from "../../constants/theme";
import NavBar from "../../components/navigation";

const { width, height } = Dimensions.get('screen');

const Schedule = () => {
    return ( 
        <View style = {styles.schedulePage}>
            <Stack.Screen
                options={{
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 30,
                        fontFamily: FONT.bold
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {
                            router.push("share")
                        }}>
                            <Image source={icons.share}/>
                        </TouchableOpacity>
                    )   
                }}
            />
            <Text style = {{fontSize: 16, fontFamily: FONT.semibold, color: COLORS.gray3, textAlign: 'center'}}> In WestLake</Text>
            <View style = {styles.wrapForm}>
                <View style = {styles.wrapAction}>
                    <TextInput textDecorationLine="none" placeholderTextColor={'gray'} style={styles.inputStyle} placeholder="Type your action" />
                </View>
                <View style = {styles.wrapJour}>
                    <TextInput textDecorationLine="none" placeholderTextColor={'gray'} style={styles.inputStyle} placeholder="From" />
                    <TextInput textDecorationLine="none" placeholderTextColor={'gray'} style={styles.inputStyle} placeholder="To" />
                </View>
                <View style= {styles.wrapButton}>
                    <TouchableOpacity>
                        <Image source= {icons.upload} style={styles.uploadIcon} />
                    </TouchableOpacity>
                    <Button>Add</Button>
                </View>
            </View>
            <View>
            <View style= {styles.schedules}>
                <FlatList
                    data={notifications}
                    renderItem={({ item }) => <Item style = {{shadowColor: 'rgb(0, 0, 0)',
                    shadowOffset: {
                        width: 3,
                        height: 3,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 2,
                    backgroundColor: 'white',
                    paddingHorizontal: 10,}} item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            </View>
            <View style= {styles.footer}>
                <Button style={styles.buttonDelete}>Delete Schedule</Button>
            </View>
            <NavBar activePage='' style={styles.navbar}/>
        </View>
    );
}
 
export default Schedule;

const styles = StyleSheet.create({ 
    schedulePage: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    wrapForm: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    wrapAction: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        marginBottom: 10,
    },
    inputStyle: {
        paddingHorizontal: 20,
        flex: 1,
        borderRadius: 12,
        backgroundColor: COLORS.white,
        ...SHADOWS.all
    },
    wrapJour: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 12
    },
    wrapButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        gap: 12,
    },
    schedules: {
        marginHorizontal: 20,
        marginBottom: 20,
        height: height * 0.45,
    },
    footer: {
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    buttonDelete: {
        width: 200,
    },
    navbar: {
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        width: '100%',
        backgroundColor: COLORS.white,
    },
 })


const notifications =[
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
    {
        title: "Reminder schedule checkin",
        detail: "You have successfully booked your room.",
        time: "10:00 AM"
    },
]