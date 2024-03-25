import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Stack, router } from "expo-router";
import ListRoom from '../../components/hotel/listRoom';
import SearchHotel from '../../components/hotel/search';
import { FONT } from '../../constants/theme';
import icons from '../../constants/icons';

const Hotel = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'rgb(242,242,242)',
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {

                    },
                    headerTitleAlign: 'center',

                }}
            />

            <View style={styles.searchContainer}>
                <SearchHotel />
            </View>

            <View style={styles.roomContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Best Deals</Text>
                    <View style={styles.filterIconContainer}>
                        <Text style={styles.text1}>Filter</Text>
                        <Image source={icons.sort} style={styles.sortIcon} />
                    </View>
                </View>
                <FlatList
                    data={listRoom}
                    renderItem={({ item }) => <ListRoom item={item} />}
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

export default Hotel

const listRoom = [
    {
        url: require('../../assets/images/list_1.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 9.999.999',
        text5: 'Per Night',
    },
    {
        url: require('../../assets/images/home_3.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 9.999.999',
        text5: 'Per Night',
    },

];

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 22,
    },

    searchContainer: {
        marginBottom: 10,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Đảm bảo các phần tử con được căn giữa theo trục dọc
        marginBottom: 18
    },

    text1: {
        fontSize: 16,
        fontFamily: FONT.bold,
        marginLeft: 18,
    },

    filterIconContainer: {
        flexDirection: 'row', // Hiển thị văn bản và biểu tượng cùng một hàng
        alignItems: 'center', // Căn giữa các phần tử trong container
        marginLeft: 200, //
    },

    sortIcon: {
        width: 25,
        height: 25,
        marginLeft: 0, // Khoảng cách giữa văn bản "Filter" và biểu tượng
    },

    roomContainer: {
        flex: 1,
        marginTop: 150,
    }
})