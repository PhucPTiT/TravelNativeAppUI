import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FONT } from '../../constants/theme';
import icons from '../../constants/icons';



const ListRoom = ({ item }) => {
    return (
        <View style={styles.listpage}>
            <Image style={styles.image} source={item.url} resizeMode="cover" />
            <View style={styles.text} >
                <View style={styles.t1}>
                    <Text style={styles.text1} >{item.text1}</Text>
                    <View style={styles.loca}>
                        <Text style={styles.text2} >{item.text2}</Text>
                        <Image source={icons.location} style={{ width: 10, height: 10, }} />
                        <Text style={styles.text3} >{item.text3}</Text>
                    </View>

                    <Image source={icons.star} style={{ width: 10, height: 10, top: 10 }} />
                </View>
                <View style={styles.t2}>
                    <Text style={[styles.text4, { textAlign: 'right' }]} >{item.text4}</Text>
                    <Text style={[styles.text5, { textAlign: 'right' }]} >{item.text5}</Text>
                </View>
            </View>
        </View>
    )
}

export default ListRoom

const styles = StyleSheet.create({
    listpage: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        alignItems: 'flex-start',
        left: 28,
        borderRadius: 20
    },

    image: {
        width: 380,
        height: 210,
    },
    loca: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    t1: {
        position: 'absolute',
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
        position: 'absolute',
        zIndex: 1,
    },

    text1: {
        fontSize: 22,
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
        fontSize: 22,
        fontFamily: FONT.bold
    },

    text5: {
        fontSize: 12,
        fontFamily: FONT.regular
    }


})