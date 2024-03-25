import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT } from '../../constants/theme';
import icons from '../../constants/icons';

const SearchHotel = ({ style, openFilter }) => {
    return (
        <View style={styles.inputWrap}>
            <View style={styles.searchContainer}>
                <View style={[styles.search, style]}>
                    <TextInput
                        style={styles.inputStyle}
                        textDecorationLine="none"
                        placeholderTextColor={'gray'}
                        placeholder="Luxury?"
                    />
                    <TouchableOpacity onPress={openFilter} style={styles.wrapFilter}>
                        <Image style={styles.iconFilter} source={icons.filter} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.searchBt}>
                    <Image style={styles.iconSearch} source={icons.search} />
                </TouchableOpacity>
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
    );
};

export default SearchHotel;

const styles = StyleSheet.create({
    inputWrap: {
        height: 150,
        width: '100%',
        marginBottom: 10,
        backgroundColor: COLORS.gray,
        position: 'absolute',
        padding: 14,
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
        alignItems: 'center',
        position: 'relative',
        left: 30,
    },
    search: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconFilter: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
        top: 15,
    },
    iconSearch: {
        width: 20,
        height: 20,
    },
    searchBt: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
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
    wrapFilter: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        paddingRight: 10, // Add padding to avoid overlap
    },
});
