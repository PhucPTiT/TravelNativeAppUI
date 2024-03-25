import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONT, SHADOWS } from "../../../constants/theme";
import { router } from "expo-router";

const Item = ({item}) => {

    const handleSelect = () => {
        router.push (
            {
                pathname: `/detail/room/${item.name}`,
            },
        )
    }
    return ( 
        <TouchableOpacity style = {styles.item} onPress={handleSelect}>
            <Image style={styles.image} source={item.image} resizeMode="cover"/>
            <Text style = {styles.name}>{item.name}</Text>
            <Text style = {styles.location}>{item.location}</Text>
        </TouchableOpacity>
    );
}
 
export default Item;

const styles = StyleSheet.create({
    item: {
        width: '45%', 
        margin: '2.5%', 
        backgroundColor: 'white', 
        borderRadius: 8, 
        overflow: 'hidden', 
        ...SHADOWS.all
    },
    image: {
        height: 160,
    },
    name: {
        fontSize: 16,
        fontFamily: FONT.bold,
        margin:4
    },
    location: {
        fontSize: 12,
        fontFamily: FONT.regular,
        margin:4
    },
})