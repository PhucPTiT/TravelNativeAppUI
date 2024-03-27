import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Stack, router } from "expo-router";
import ListRoom from '../../components/hotel/listRoom';
import SearchHotel from '../../components/hotel/search';
import { COLORS, FONT } from '../../constants/theme';
import icons from '../../constants/icons';
import FilterModal from '../../components/bookvehicle/filter';

const Hotel = () => {

    const [modalVisible, setModalVisible] = useState(false);
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
                        fontFamily: FONT.bold,
                        fontSize: 22,
                    },
                    headerTitleAlign: 'center',

                }}
            />

            <View style={styles.searchContainer}>
                <SearchHotel openFilter={() => setModalVisible(true)} />
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
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
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
        url: require('../../assets/images/list_1.png'),
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
        backgroundColor: COLORS.white,
        paddingBottom: 22,
    },


    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
        justifyContent: 'space-between',
    },

    text1: {
        fontSize: 16,
        fontFamily: FONT.bold,
    },

    filterIconContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },

    sortIcon: {
        width: 25,
        height: 25,
        marginLeft: 0, 
    },

    roomContainer: {
        flex: 1,
        paddingHorizontal: 20,
    }
})