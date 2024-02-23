import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const Search = () => {
    return (
        <View>
            <Text >Search</Text>
            <View >
                <TextInput textDecorationLine="none" placeholderTextColor={'gray'} placeholder="search" />
            </View>
        </View>
    )
}

export default Search
