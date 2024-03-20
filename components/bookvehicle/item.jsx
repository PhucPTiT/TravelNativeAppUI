import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import icons from "../../constants/icons";

const Item = ({item}) => {
    return ( 
        <ImageBackground source = {item.image}>
            <View style = {styles.header}>
                <Text>{item.brand}</Text>
                <Text>{item.destination}</Text>
            </View>
            <View style = {styles.footer}>
                <View>
                    <View>
                        <Image source={icons.locationRed}/>
                        <Text>
                            {item.local}
                        </Text>
                    </View>
                    <StarRating rating={4}/> 
                </View>
                <Text>
                    {item.price} $
                </Text>
            </View>
        </ImageBackground>
     );
}
 
export default Item;

const styles = StyleSheet.create({
    image: {
        paddingHorizontal: 30,
        paddingVertical: 6,
        justifyContent: 'space-between'
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