import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const TicketHistory = () => {
    return ( 
        <View>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'rgb(242,242,242)' },
                    headerTintColor: '#000',
                    headerShadowVisible: false
                }}
            />
            <Text style = {StyleSheet.ticketHistory}>Tickets History</Text>
        </View>
     );
}
 
export default TicketHistory;

const styles = StyleSheet.create({})