import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../ui/button';
import { COLORS, FONT } from '../../constants/theme'
import { router } from "expo-router";


const List = ({ item }) => {

    const handleSearch = () => {
        router.push("listResult/infoResult")
    }

    return (
        <View style={styles.listpage}>
            <View >
                <Image style={styles.image} source={item.url} resizeMode="cover" />
            </View>
            <View style={styles.info}>
                <View style={styles.text}>
                    <Text style={styles.text1} >{item.text1}</Text>
                    <Text style={styles.text2} >{item.text2}</Text>
                </View>
                <View style={styles.bt}>
                    <Button style={styles.button} variant='primary' onPress={handleSearch}>Reverse Room</Button>
                </View>
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    listpage: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        alignItems: 'flex-start',
        borderRadius: 20,
        backgroundColor: COLORS.white,
    },
    image: {
        width: 415,
        height: 230,
        borderRadius: 20,
    },
    info: {
        flexDirection: 'row',
    },

    text: {
        left: 30,
        width: 135
    },

    text1: {
        fontSize: 20,
        color: COLORS.black,
        fontFamily: FONT.bold,
    },
    text2: {
        fontSize: 20,
        color: COLORS.black,
        fontFamily: FONT.bold,
    },

    bt: {
        left: 110,
        top: 10,
        impotant: true
    },
    button: {
        borderRadius: 20
    }

})