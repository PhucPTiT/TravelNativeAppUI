import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import icons from '../../constants/icons';

const Intro4 = ({ item }) => {
    return (
        <View style={styles.item}>
            <View style={styles.t1}>
                <Text style={styles.text1} >{item.text1}</Text>
                <Text style={styles.text2} >{item.text2}</Text>
            </View>
            <View style={styles.t2}>
                <View style={styles.icon}>
                    <Image source={icons.location} style={{ width: 10, height: 10, }} />
                    <Text style={styles.text3} >{item.text3}</Text>
                </View>
                <Image source={icons.star} style={{ width: 10, height: 10, top: 10 }} />
            </View>
            <View style={styles.t3}>
                <Text style={[styles.text4, { textAlign: 'right' }]}>{item.text4}</Text>
                <Text style={[styles.text5, { textAlign: 'right' }]}>{item.text5}</Text>
            </View>
            <Image style={styles.image2} source={item.url} resizeMode="cover" />
        </View>
    )
}

export default Intro4

const styles = StyleSheet.create({
    image2: {
        width: 135,
        height: 135,
        borderRadius: 20,
        marginBottom: 15
    },

    item: {
        marginLeft: 22,
        position: 'relative',
        justifyContent: 'flex-end',
        borderRadius: 20,


    },
    icon: {
        flexDirection: 'row',
        bottom: 0,
    },

    t1: {
        position: 'absolute',
        justifyContent: 'flex-start',
        zIndex: 1,
        top: 6,
        left: 138,
    },

    t2: {
        position: 'absolute',
        zIndex: 1,
        top: 94,
        left: 140,
    },

    t3: {
        position: 'absolute',
        justifyContent: 'flex-end',
        zIndex: 1,
        top: 91,
        left: 285,
    },

    text1: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: FONT.bold,
    },

    text2: {
        fontSize: 9,
        color: COLORS.black,
        fontFamily: FONT.regular,
    },

    text3: {
        fontSize: 9,
        color: COLORS.black,
        fontFamily: FONT.regular,
    },

    text4: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: FONT.bold,
    },

    text5: {
        fontSize: 10,
        color: COLORS.black,
        fontFamily: FONT.bold,
    }
})