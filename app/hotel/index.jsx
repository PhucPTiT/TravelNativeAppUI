import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Stack, router } from "expo-router";
import ListRoom from '../../components/hotel/listRoom';
import { FONT } from '../../constants/theme';

const Hotel = () => {
    return (
        <View>
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
            <View>
                <Text style={styles.text}>Best Deals</Text>
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
    // {
    //     url: require('../../assets/images/home_3.png'),
    //     text1: 'Hotel Burj Al Arab',
    //     text2: 'Dubai - Uni Emirat Arab',
    //     text3: '(999mm) Umm Suqeim 3',
    //     text4: '$ 9.999.999',
    //     text5: 'Per Night',
    // },

];

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: FONT.bold,
        margin: 18,
    }
})