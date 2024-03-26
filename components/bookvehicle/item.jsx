import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { COLORS, FONT } from "../../constants/theme";
import { router } from "expo-router";

const Item = ({item, style}) => {
    return ( 
        <TouchableOpacity onPress = {() => router.push('bookvehicle/select')} style = {[styles.item, style]}>
            <ImageBackground resizeMode="cover" imageStyle = {styles.image} source = {item.image}>
                <View style = {styles.header}>
                    <Text style = {{fontSize: 14, fontFamily: FONT.bold}}>{item.brand}</Text>
                    <Text style = {{fontSize: 9, fontFamily: FONT.regular}}>{item.destination}</Text>
                </View>
                <View style = {styles.footer}>
                    <View>
                        <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
                            <Image style={{width: 10, height: 10}} source={icons.locationRed}/>
                            <Text style = {{fontFamily: FONT.regular, fontSize: 9}}>
                                {item.local}
                            </Text>
                        </View>
                        <StarRating rating={item.rating}/> 
                    </View>
                    <Text style = {{fontFamily: FONT.semibold, fontSize: 14, color: COLORS.gold}}>
                        {item.price} $
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
     );
}
 
export default Item;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        height: 134,
        backgroundColor: 'aqua',
    },
    image: {
        height: 134,
        width: '100%',
    },

    filledStar: {
        color: 'gold',
    },
    emptyStar: {
        color: 'gray',
    },
    starContainer: {
        flexDirection: 'row',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 44,
        paddingHorizontal: 20,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 8,
    }
})

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
        stars.push(
            <Text key={i} style={i < rating ? styles.filledStar : styles.emptyStar}>
                ★
            </Text>
        );
    }
    return <View style={styles.starContainer}>{stars}</View>;
};