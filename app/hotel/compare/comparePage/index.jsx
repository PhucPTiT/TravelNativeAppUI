import React from 'react'
import { FlatList, FlatListComponent, Image, StyleSheet, Text, View } from 'react-native'
import { Stack, router } from "expo-router";
import Intro2 from '../../../../components/home/intro2';
import { COLORS, FONT } from '../../../../constants/theme';
import ComparePage from '../../../../components/hotel/comparepage';
import icons from '../../../../constants/icons';

const Comparepage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
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
            </View>

            <FlatList
                data={slides2}
                renderItem={({ item }) => <Intro2 item={item} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.optionsContainer}>
                <Text style={styles.option}>Review</Text>
                <Text style={styles.option}>Popular</Text>
                <Text style={styles.option}>Cheap</Text>
            </View>

            <View style={styles.flatListContainer}>


                <View style={styles.text}>
                    <View >
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            <Text style={styles.text1}> Arab</Text>
                            <Image source={icons.star} style={{ width: 10, height: 10, top: 10, left: 5 }} />
                        </View>
                        <Text style={styles.text2}>1345 Đánh giá</Text>
                    </View>
                    <Text style={styles.text3}>$ 9.999.999</Text>
                </View>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <ComparePage item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                />



                <View style={styles.text}>
                    <View >
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            <Text style={styles.text1}> America</Text>
                            <Image source={icons.star} style={{ width: 10, height: 10, top: 10, left: 5 }} />
                        </View>
                        <Text style={styles.text2}>1345 Đánh giá</Text>
                    </View>
                    <Text style={styles.text3}>$ 9.999</Text>
                </View>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <ComparePage item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                />


            </View>
        </View>
    )
}

export default Comparepage

const slides = [
    {
        url: require('../../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../../assets/images/review_img.png'),
    },
    {
        url: require('../../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../../assets/images/review_img.png'),

    },

];


const slides2 = [
    {
        url: require('../../../../assets/images/home_2.png'),
        text1: 'Arab',
        text2: 'Dubai'
    },
    {
        url: require('../../../../assets/images/home_2.png'),
        text1: 'Arab',
        text2: 'Dubai'
    },
    {
        url: require('../../../../assets/images/home_2.png'),
        text1: 'Arab',
        text2: 'Dubai'
    },

];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginTop: 30,
        backgroundColor: COLORS.gray3,
        borderRadius: 20,
        width: 360, // Chiều rộng mặc định cho optionsContainer
        height: 50, // Chiều cao mặc định cho optionsContainer
        alignItems: 'center',
    },
    option: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.primary,
        textAlign: 'center',
        lineHeight: 50,
    },
    flatListContainer: {
        position: 'relative',
        flex: 1,
        padding: 10,
        marginLeft: 10,
        marginRight: 20,
    },

    text: {
        flexDirection: 'row',
        marginLeft: 10,

    },
    text1: {
        fontSize: 20,
        fontFamily: FONT.bold
    },
    text2: {
        fontSize: 18,
        fontFamily: FONT.regular
    },

    text3: {
        fontSize: 22,
        fontFamily: FONT.bold,
        marginLeft: 100,
        justifyContent: 'flex-end'
    },
});