import { Stack } from "expo-router";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import Search from "../../components/bookvehicle/search";
import icons from "../../constants/icons";
import Item from "../../components/bookvehicle/item";


const BookingVehicle = () => {
    const image = require('../../assets/images/bookvehicle_1.png');

    return ( 
        <View>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'rgb(242,242,242)' },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 22,
                        fontFamily: FONT.bold
                    },
                    headerTitleAlign : "center",
                }}
            /> 
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.header}> 
                    <Search/>
                    <View style = {styles.row}>
                        <View style = {styles.col}>
                            <Text style = {{fontSize: 14, fontFamily: FONT.regular}}>
                                Date
                            </Text>
                            <Text style = {{fontFamily: FONT.semibold, fontSize: 16}}>
                                13 Jul - 18 Jul
                            </Text>
                        </View>
                        <View style = {styles.col}>
                            <Text style = {{fontSize: 14, fontFamily: FONT.regular}}>
                                Number of Person
                            </Text>
                            <Text style = {{fontFamily: FONT.semibold, fontSize: 16}}>
                                1 Person
                            </Text>
                        </View>
                    </View>
                    <Text style = {{fontFamily: FONT.semibold, fontSize: 16}}>One - Trip</Text>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={() => {}} style = {styles.button}>
                            <Image style= {{width: 24, height: 24}} source={icons.search} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style = {styles.body}>
                <View style = {styles.row}>
                    <Text style = {{fontSize: 16, fontFamily: FONT.bold}}>Best Tickets</Text>
                    <TouchableOpacity style = {styles.wrapSort}>
                        <Text style = {{fontSize: 14, fontFamily: FONT.bold}}>Filter</Text>
                        <Image style ={{width: 24, height: 24}}  source={icons.sort}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.listTicket}>
                    <FlatList
                        data={listTicket}
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
        </View>
     );
}
 
export default BookingVehicle;

const styles = StyleSheet.create({
    image: {
        paddingTop: 26,
        paddingBottom: 68,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    header: {
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 20,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
    },
    button: {
        width:66,
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 99,
        alignContent: 'stretch'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    body: {
        paddingHorizontal: 20,
    },
    wrapSort: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
})

const listTicket = [
    {
        image:require('../../assets/images/bookvehicleBg.png'),
        brand: "Plane Burj Al Arab",
        destination: "Dubai - Uni Emirat Arab",
        local: "VIE",
        price: "8"
    },
    {
        image:require('../../assets/images/bookvehicleBg.png'),
        brand: "Plane Burj Al Arab",
        destination: "Dubai - Uni Emirat Arab",
        local: "VIE",
        price: "8"
    },
    {
        image:require('../../assets/images/bookvehicleBg.png'),
        brand: "Plane Burj Al Arab",
        destination: "Dubai - Uni Emirat Arab",
        local: "VIE",
        price: "8"
    },
    {
        image:require('../../assets/images/bookvehicleBg.png'),
        brand: "Plane Burj Al Arab",
        destination: "Dubai - Uni Emirat Arab",
        local: "VIE",
        price: "8"
    },
]