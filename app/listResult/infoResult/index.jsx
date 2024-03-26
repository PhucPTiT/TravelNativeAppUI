import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Info from '../../../components/listResult/info';
import Pagination from '../../../components/pagination';
import { COLORS, FONT } from '../../../constants/theme';
import icons from '../../../constants/icons';
import Button from '../../../components/ui/button';
import Intro4 from '../../../components/home/intro4';
import { Stack, router } from "expo-router";

const { width, height } = Dimensions.get('screen');

const InfoResult = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = () => {
        router.push("/hotel/infoRoom")
    }

    const handleScroll = (event) => {
        let contentOffset = event.nativeEvent.contentOffset.x;
        if (contentOffset < 0) {
            contentOffset = 0;
        }
        const index = Math.round(contentOffset / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.page}>
            <FlatList
                data={[{ key: 'main', component: 'main' }, ...image, ...slides4]}
                renderItem={({ item }) => {
                    if (item.component === 'main') {
                        return (
                            <View>
                                <View style={{ position: 'relative' }}>
                                    <FlatList
                                        data={image}
                                        renderItem={({ item }) => <Info item={item} />}
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
                                    <Pagination data={image} activeIndex={activeIndex} style={styles.pagination} />
                                </View>
                                <View style={styles.text}>
                                    <Text style={styles.text1}>Văn Miếu - QuốcTử Giám</Text>
                                    <Image source={icons.star} style={{ left: 9 }} />
                                    <Text style={styles.text2}>Ha Noi, Viet Nam</Text>
                                    <Text style={styles.text3}>Văn Miếu – Quốc Tử Giám là quần thể di tích đa dạng, phong phú hàng đầu của thành phố Hà Nội, nằm ở phía Nam kinh thành Thăng Long. Quần thể kiến trúc Văn Miếu – Quốc Tử Giám bao gồm: hồ Văn, khu Văn Miếu – Quốc Tử Giám và vườn Giám, mà kiến trúc chủ thể là Văn miếu (chữ Hán: 文廟) - nơi thờ Khổng Tử, và Quốc tử giám (chữ Hán: 國子監) - trường đại học đầu tiên của Việt Nam. Khu Văn Miếu – Quốc Tử Giám có tường gạch vồ bao quanh, phía trong chia thành 5 lớp không gian với các kiến trúc khác nhau</Text>

                                </View>
                                <View style={styles.bt}>
                                    <Button style={styles.button} variant='secondary'>Schedule</Button>
                                    <Button style={styles.button} variant='primary' onPress={handleClick}>Book Rooms</Button>
                                    <Button style={styles.button} variant='outline'>Book Vehicle</Button>
                                </View>

                                <View>
                                    <Text style={styles.text4}>Best Deals</Text>

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
        </View>
    )
}

export default InfoResult

const image = [
    {
        url: require('../../../assets/images/vanMieu.png'),

    },
    {
        url: require('../../../assets/images/vanMieu.png'),

    },
    {
        url: require('../../../assets/images/vanMieu.png'),

    },
];

const slides4 = [
    {
        url: require('../../../assets/images/home_3.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 9.999.999',
        text5: 'Per Night',
    },
    {
        url: require('../../../assets/images/home_3.png'),
        text1: 'Hotel Burj Al Arab',
        text2: 'Dubai - Uni Emirat Arab',
        text3: '(999mm) Umm Suqeim 3',
        text4: '$ 9.999.999',
        text5: 'Per Night',
    },


];

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    text: {
        left: 10,
        right: 20,
    },
    text1: {
        fontSize: 22,
        color: COLORS.black,
        fontFamily: FONT.bold,
        margin: 9,
    },
    text2: {
        fontSize: 16,
        fontFamily: FONT.regular,
        margin: 9,
    },
    text3: {
        fontSize: 14,
        fontFamily: FONT.regular,
        margin: 9,
    },

    text4: {
        fontSize: 20,
        fontFamily: FONT.bold,
        color: COLORS.black,
        margin: 22,
    },

    bt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        important: true,
        margin: 9,
        important: true
    },

    button: {
        borderRadius: 20
    },

    pagination: {
        top: 0
    }
})

