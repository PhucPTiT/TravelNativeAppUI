import React, { useRef, useState, useEffect } from "react";
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Search from '../../components/home/search';
import { COLORS, FONT } from '../../constants/theme';
import Intro3 from '../../components/home/intro3';
import Intro1 from '../../components/home/intro1';
import Intro2 from '../../components/home/intro2';
import Intro4 from '../../components/home/intro4';
import Pagination from '../../components/pagination';
import Action from "../../components/home/action";
import NavBar from "../../components/navigation";

const { width, height } = Dimensions.get('screen');


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = activeIndex + 1;
            if (nextIndex >= slides1.length) {
                nextIndex = 0;
            }
            if (flatListRef.current) {
                flatListRef.current.scrollToIndex({ index: nextIndex });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleScroll = (event) => {
        let contentOffset = event.nativeEvent.contentOffset.x;
        if (contentOffset < 0) {
            contentOffset = 0;
        }
        const index = Math.round(contentOffset / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.home}>
            <FlatList
                data={[{ key: 'main', component: 'main' }, ...slides1, ...slides2, ...slides3, ...slides4]}
                renderItem={({ item }) => {
                    if (item.component === 'main') {
                        return (
                            <View style={{ position: 'relative', marginBottom: 60 }}>
                                <Search />
                                <View style={{ height: height * 0.6 }}>
                                    <FlatList
                                        ref={flatListRef}
                                        data={slides1}
                                        renderItem={({ item }) => <Intro1 item={item} />}
                                        keyExtractor={(item, index) => index.toString()}
                                        horizontal
                                        pagingEnabled
                                        snapToAlignment="center"
                                        showsHorizontalScrollIndicator={false}
                                        onScroll={handleScroll}
                                        initialScrollIndex={activeIndex}
                                        getItemLayout={(data, index) => ({
                                            length: width,
                                            offset: width * index,
                                            index,
                                        })}
                                    />
                                    <Pagination data={slides1} activeIndex={activeIndex} style={styles.pagination} />
                                </View>

                                <Action />

                                <Text style={styles.text3}>Recommended List</Text>

                                <FlatList
                                    data={slides2}
                                    renderItem={({ item }) => <Intro2 item={item} />}
                                    keyExtractor={(item, index) => index.toString()}
                                    horizontal
                                    pagingEnabled
                                    snapToAlignment="center"
                                    showsHorizontalScrollIndicator={false}
                                />

                                <Text style={styles.text3}>Popular Destination</Text>

                                <FlatList
                                    data={slides3}
                                    renderItem={({ item }) => <Intro3 item={item} />}
                                    keyExtractor={(item, index) => index.toString()}
                                    horizontal
                                    pagingEnabled
                                    snapToAlignment="center"
                                    showsHorizontalScrollIndicator={false}
                                />

                                <Text style={styles.text4}>Best Deals</Text>

                                <View style = {{marginHorizontal: 30, marginBottom: 20}}>
                                    <FlatList
                                        data={slides4}
                                        renderItem={({ item }) => <Intro4 item={item} />}
                                        keyExtractor={(item, index) => index.toString()}
                                        horizontal={false}
                                        pagingEnabled
                                        snapToAlignment="center"
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                        );
                    } else {
                        return item.component; // Render other components as needed
                    }
                }}
                keyExtractor={(item, index) => index.toString()}
                horizontal={false} // Set this to true if you want the outer list to be horizontal
                pagingEnabled={false}
                showsVerticalScrollIndicator={false}

            />
            <NavBar activePage='home' style={styles.navbar} />
        </View>


    )
}

export default Home

const slides1 = [
    {
        url: require('../../assets/images/home_1.png'),

    },
    {
        url: require('../../assets/images/home_1.png'),

    },
    {
        url: require('../../assets/images/home_1.png'),

    },

];

const slides2 = [
    {
        url: require('../../assets/images/home_2.png'),
        text1: 'Arab',
        text2: 'Dubai'
    },
    {
        url: require('../../assets/images/home_2.png'),
        text1: 'Arab',
        text2: 'Dubai'
    },
    {
        url: require('../../assets/images/home_2.png'),
        text1: 'Arab',
        text2: 'Dubai'
    },

];

const slides3 = [
    {
        url: require('../../assets/images/home_3.png'),
        text: 'Japan'
    },
    {
        url: require('../../assets/images/home_3.png'),
        text: 'Japan'
    },
    {
        url: require('../../assets/images/home_3.png'),
        text: 'Japan'
    },

];

const slides4 = [
    {
        url: require('../../assets/images/home_3.png'),
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
    image: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 21,
        justifyContent: 'space-between',
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 28,
    },

    text1: {
        fontSize: 30,
        fontFamily: FONT.bold,
        color: COLORS.white,

    },

    text2: {
        fontSize: 12,
        fontFamily: FONT.regular,
        color: COLORS.white,

    },

    text3: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.black,
        margin: 22,
    },

    text4: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.black,
        margin: 22,
    },

    view1: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        borderRadius: 30,

    },

    slide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 21,
        height: 0.6 * height,
        justifyContent: 'center',
    },

    pagination: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    navbar: {
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        width: '100%',
        backgroundColor: COLORS.white,
    },
    home: {
        backgroundColor: 'white'
    }
});


