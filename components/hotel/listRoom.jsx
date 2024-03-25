import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { FONT } from '../../constants/theme';
import icons from '../../constants/icons';
import { Stack, router } from "expo-router";

const ListRoom = ({ item }) => {

    const handleClick = () => {
        router.push("/hotel/infoRoom")
    }

    return (
        <View style={styles.listpage}>
            <TouchableOpacity onPress={handleClick}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.url} resizeMode="cover" />
                </View>
            </TouchableOpacity>
            <View style={styles.text}>
                <View style={styles.t1}>
                    <Text style={styles.text1}>{item.text1}</Text>
                    <View style={styles.loca}>
                        <Text style={styles.text2}>{item.text2}</Text>
                        <Image source={icons.location} style={{ width: 10, height: 10 }} />
                        <Text style={styles.text3}>{item.text3}</Text>
                    </View>
                    <Image source={icons.star} style={{ width: 10, height: 10, top: 2, marginBottom: 5 }} />
                </View>
                <View style={styles.t2}>
                    <Text style={[styles.text4, { textAlign: 'right' }]}>{item.text4}</Text>
                    <Text style={[styles.text5, { textAlign: 'right' }]}>{item.text5}</Text>
                </View>
            </View>
        </View>
    )
}

export default ListRoom;

const styles = StyleSheet.create({
    listpage: {
        flex: 1,
        alignItems: 'center',
        alignItems: 'flex-start',
        left: 28,
        right: 40,
        borderRadius: 20,
        marginBottom: 21,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxWidth: 380,
        maxHeight: 290
    },
    imageContainer: {
        width: 380, // Kích thước cố định của khung bao ngoài
        height: 210, // Kích thước cố định của khung bao ngoài
        borderRadius: 20,
        overflow: 'hidden', // Đảm bảo hình ảnh không vượt ra khỏi khung
    },
    image: {
        height: "100%",
        width: "100%",
    },
    loca: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    t1: {
        zIndex: 1,
        justifyContent: 'flex-start',
    },
    t2: {
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'flex-end',
        left: 240,
    },

    text: {
        zIndex: 1,
        left: 10
    },

    text1: {
        fontSize: 20,
        fontFamily: FONT.bold
    },

    text2: {
        fontSize: 8,
        fontFamily: FONT.regular
    },

    text3: {
        fontSize: 8,
        fontFamily: FONT.regular
    },

    text4: {
        fontSize: 20,
        fontFamily: FONT.bold
    },

    text5: {
        fontSize: 12,
        fontFamily: FONT.regular
    }
});
