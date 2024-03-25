import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT } from '../../constants/theme';
import icons from '../../constants/icons';

const avatarImage = require('../../assets/images/review_img.png');

const ReviewUsers = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.avatarContainer}>
                    <Image source={avatarImage} style={styles.avatar} />
                </View>
                <View style={styles.text}>
                    <View>
                        <Text style={styles.text1}>Kang Jhon</Text>
                        <Text style={styles.text2}>3 Hours 43 Minute Ago</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginLeft: 130 }}>
                        <Text style={{ fontSize: 16, }}>Rating</Text>
                        <Image source={icons.star} style={{ width: 10, height: 10, top: 3 }} />
                    </View>
                </View>
            </View>
            <View style={styles.t1}>
                <Text style={styles.text2}>The rooms are nice and very tidy. the mattress is soft plus a soft blanket makes sleeping very comfortable</Text>
                <Text style={{ fontSize: 14, marginTop: 10 }}>Reply</Text>
            </View>
            <View style={styles.horizontalLine}></View>
        </View>
    )
}

export default ReviewUsers

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginLeft: 20
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },

    avatarContainer: {
        borderRadius: 50,
        overflow: 'hidden',
    },

    avatar: {
        width: 40,
        height: 40,
    },

    text: {
        marginLeft: 10,
        flexDirection: 'row',
    },

    t1: {
        flexDirection: 'column',
    },

    text1: {
        fontSize: 16,
        fontFamily: FONT.bold,
    },

    text2: {
        fontSize: 12,
        fontFamily: FONT.regular,
    },

    horizontalLine: {
        borderBottomWidth: 3,
        borderBottomColor: COLORS.gray2, // Màu sắc của đường gạch ngang
        marginVertical: 10, // Khoảng cách dọc giữa đường gạch ngang và phần còn lại
    },

});
