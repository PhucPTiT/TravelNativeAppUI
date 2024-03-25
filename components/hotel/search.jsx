import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONT } from '../../constants/theme';
import icons from '../../constants/icons';

const SearchHotel = () => {
    return (
        <View style={styles.inputWrap} >
            <View style={styles.searchContainer}>
                <View style={styles.search} >
                    <TextInput
                        style={styles.inputStyle}
                        textDecorationLine="none"
                        placeholderTextColor={'gray'}
                        // onSubmitEditing={handleSearch}
                        placeholder="Luxury?"
                    />
                    <Image style={styles.iconFilter} source={icons.filter} />
                </View>
                <View style={styles.searchBt}>
                    <Image style={styles.iconSearch} source={icons.search} />
                </View>

            </View>
            <View style={styles.textContainer}>
                <View style={styles.textColumn}>
                    <Text style={styles.text1}>Flight Date</Text>
                    <Text style={styles.text2}>13 Jul - 18 Jul</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.textColumn}>
                    <Text style={styles.text1}>Number of Person</Text>
                    <Text style={styles.text2}>1 Room - 2 Person</Text>
                </View>
            </View>
        </View>
    )
}

export default SearchHotel

const styles = StyleSheet.create({
    inputWrap: {
        height: 150,
        width: "100%",
        marginBottom: 10,
        backgroundColor: COLORS.gray,
        position: 'absolute',
        padding: 14
    },
    inputStyle: {
        width: 290,
        height: 50,
        borderRadius: 30,
        textAlign: 'center',
        backgroundColor: COLORS.white,
    },

    searchContainer: {
        flexDirection: 'row',
        left: 30
    },

    search: {
    },

    iconFilter: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
        top: 15
    },

    iconSearch: {
        width: 20,
        height: 20,
        position: 'absolute',
    },
    searchBt: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        left: 12,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textColumn: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        borderRightWidth: 1,
        borderColor: COLORS.white,
        height: '80%',
    },
    text1: {
        fontSize: 14,
        fontFamily: FONT.regular,
    },
    text2: {
        fontSize: 16,
        fontFamily: FONT.bold,
    },

});