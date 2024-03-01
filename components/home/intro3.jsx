import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT } from '../../constants/theme'

const Intro3 = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text} >{item.text}</Text>
            <Image style={styles.image2} source={item.url} resizeMode="cover" />
        </View>
    )
}

export default Intro3

const styles = StyleSheet.create({
    image2: {
        width: 290,
        height: 188,
        borderRadius: 20,
    },

    item: {
        marginLeft: 22,
        position: 'relative',
    },

    text: {
        position: 'absolute',
        zIndex: 1,
        top: 12,
        left: 18,
        fontSize: 22,
        color: COLORS.white,
        fontFamily: FONT.bold,
    }
})