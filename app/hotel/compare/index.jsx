import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Search from '../../../components/home/search'
import { COLORS, FONT } from '../../../constants/theme'
import Compare from '../../../components/hotel/compare'
import NavBar from '../../../components/navigation'
import { Stack } from 'expo-router'

const CompareRoom = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'rgb(0, 206, 201)',
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {

                    },
                    headerTitleAlign: 'center',

                }}
            />
            <View style={styles.search}>
                <Text style={styles.text1}>Choose comparetitor</Text>
                <Search />
            </View>

            <View style={styles.room}>
                <FlatList
                    data={room}
                    renderItem={({ item }) => <Compare item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <NavBar activePage='home' style={styles.navbar} />
        </View>
    )
}

export default CompareRoom

const room = [
    {
        url: require('../../../assets/images/list_1.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 100',
        text5: 'Per Night',
    },
    {
        url: require('../../../assets/images/home_3.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 6.337',
        text5: 'Per Night',
    },

    {
        url: require('../../../assets/images/home_3.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 9.999',
        text5: 'Per Night',
    },

];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        position: 'relative',
    },

    search: {
        flex: 1,
        alignItems: 'center',
        maxHeight: 150
    },

    text1: {
        color: COLORS.white,
        fontSize: 35,
        fontFamily: FONT.bold,
        textAlign: 'center',
        color: COLORS.white,
        margin: 10
    },

    room: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: 20,
        paddingTop: 10
    },
    navbar: {
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        width: '100%',
        backgroundColor: COLORS.white,
    },
});