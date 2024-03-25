import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT } from '../../constants/theme';

const image = require('../../assets/images/review_img.png');

const ComparePage = ({ item }) => {
    return (
        <View style={styles.container} >

            <Image style={styles.image} source={item.url} resizeMode="contain" />

        </View>
    )
}

export default ComparePage


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
    },

    image: {
        width: 140,
        height: 160,
    },

})