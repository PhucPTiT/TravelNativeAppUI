import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Stack, router } from "expo-router";
import List from '../../components/listResult/list';
import { COLORS, FONT } from '../../constants/theme';



const ListResult = () => {
    return (
        <View style={styles.listResult}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'rgb(242,242,242)',
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontFamily: FONT.bold,
                        fontSize: 22,
                    },
                    headerTitleAlign: 'center',

                }}
            />
            <View>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <List item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default ListResult

const slides = [
    {
        url: require('../../assets/images/vanMieu.png'),
        text1: 'Văn Miếu Quốc Tử Giám',
        location: 'HaNoi, VietNam'
    },
    {
        url: require('../../assets/images/list_1.png'),
        text1: 'Burj Al Arab',
        text2: '$ 9.999.999'
    },
    {
        url: require('../../assets/images/vanMieu.png'),
        text1: 'Văn Miếu Quốc',
        location: 'HaNoi, VietNam'
    },
    {
        url: require('../../assets/images/list_1.png'),
        text1: 'Burj Al Arab',
        text2: '$ 9.999.999'
    },
    {
        url: require('../../assets/images/vanMieu.png'),
        text1: 'Văn Miếu Quốc',
        location: 'HaNoi, VietNam'
    },
    {
        url: require('../../assets/images/list_1.png'),
        text1: 'Burj Al Arab',
        text2: '$ 9.999.999'
    },

];

const styles = StyleSheet.create({
    listResult: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.white,
    }
})