import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONT, SHADOWS } from "../../constants/theme";
import icons from '../../constants/icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Search = () => {
    return (
        <View style={styles.inputWrap}>
            <Image source={icons.search} />
            <TextInput
                style={styles.inputStyle}
                textDecorationLine="none"
                placeholderTextColor={'gray'}
                placeholder="Search"
            />
            {/* <Text>hshsh</Text> */}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    inputWrap: {
        maxWidth: 400,
        maxHeight: 50,
        width: "100%",
        height: '100%',
        borderRadius: 30,
        marginBottom: 10,
        position: 'absolute',
        top: 60,
        zIndex: 1,
        left: 20,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 14
    },
    inputStyle: {
        flex: 1,
        borderRadius: 30,
        borderColor: COLORS.white,
        textAlign: 'center',
        backgroundColor: COLORS.white,

    },
});

