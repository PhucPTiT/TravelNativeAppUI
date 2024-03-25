import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT } from '../../constants/theme'
import { router } from 'expo-router'

const Intro2 = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => {router.push('listResult/infoResult')}} style={styles.item}>
            <View style={styles.text}>
                <Text style={styles.text1} >{item.text1}</Text>
                <Text style={styles.text2} >{item.text2}</Text>
            </View>
            <Image style={styles.image2} source={item.url} resizeMode="cover" />
        </TouchableOpacity>
    )
}

export default Intro2

const styles = StyleSheet.create({
    image2: {
        width: 160,
        height: 188,
        borderRadius: 20,
    },

    item: {
        marginLeft: 22,
        position: 'relative',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    text: {
        position: 'absolute',
        justifyContent: 'flex-end',
        zIndex: 1,
        top: 135,
        left: 18,
    },
    text1: {
        fontSize: 16,
        color: COLORS.black,
        fontFamily: FONT.bold,
    },

    text2: {
        fontSize: 12,
        color: COLORS.black,
        fontFamily: FONT.regular,
    }
})