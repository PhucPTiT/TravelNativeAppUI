import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import icons from '../../constants/icons';
import { router } from 'expo-router';

const Intro4 = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => {router.push('hotel/infoRoom')}} style={styles.item}>
            <Image style={styles.image2} source={item.url} resizeMode="cover" />
            <View style = {styles.right}>
                <View style={styles.t1}>
                    <Text style={styles.text1} >{item.text1}</Text>
                    <Text style={styles.text2} >{item.text2}</Text>
                </View>
                <View style = {styles.bottom}>
                    <View style={styles.t2}>
                        <View style={styles.icon}>
                            <Image source={icons.location} style={{ width: 10, height: 10, }} />
                            <Text style={styles.text3} >{item.text3}</Text>
                        </View>
                        <Image source={icons.star} style={{ width: 10, height: 10 }} />
                    </View>
                    <View style={styles.t3}>
                        <Text style={[styles.text4, { textAlign: 'right' }]}>{item.text4}</Text>
                        <Text style={[styles.text5, { textAlign: 'right' }]}>{item.text5}</Text>
                    </View>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}

export default Intro4

const styles = StyleSheet.create({
    image2: {
        height: '100%',
        maxWidth: 150,
        borderRadius: 20,
    },

    item: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.gray,
        height: 150,
        ...SHADOWS.default,
    },
    right: {
        flex: 1,
        justifyContent: 'space-between',
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginRight: 8,
    },
    icon: {
        flexDirection: 'row',
        bottom: 0,
    },
    t2: {
        maxWidth: 100,
    },
    t3: {
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