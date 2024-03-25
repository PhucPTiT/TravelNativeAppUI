import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Stack, router } from "expo-router";
import { COLORS, FONT } from '../../../constants/theme';
import icons from '../../../constants/icons';
import ReviewSumery from '../../../components/hotel/reviewSumery';
import ImgDetails from '../../../components/hotel/imgDetails';
import ReviewUsers from '../../../components/hotel/reviewUsers';
import Button from '../../../components/ui/button';


const image = require('../../../assets/images/list_1.png');
const mapImg = require('../../../assets/images/map.png');

const { width, height } = Dimensions.get('screen');

const InfoRoom = () => {

    const handleClick = () => {
        router.push("hotel/compare")
    }

    const initialText = "This luxury and well-known hotel overlooking the Chao Phraya river is a 3-minute walk from the nearest ferry stop.";
    const [isExpanded, setIsExpanded] = useState(true); // State để kiểm tra trạng thái hiển thị
    const [text, setText] = useState(initialText);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
        // Cắt văn bản khi cần thiết
        if (!isExpanded) {
            setText(initialText.slice(0, 50)); // Chỉ hiển thị 50 kí tự đầu tiên
        } else {
            setText(initialText); // Hiển thị toàn bộ văn bản
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} >
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
                </ImageBackground>

                <View style={styles.container2}>
                    <View style={styles.text}>
                        <Text style={styles.text1}>Hotel Burj Al Arab</Text>
                        <View style={styles.t1}>
                            <View style={styles.t}>
                                <TouchableOpacity onPress={handleClick} style={styles.t1}>
                                    <Image source={icons.compare} style={{ width: 14, height: 14 }} />
                                    <Text style={styles.text2}>Compare</Text>
                                </TouchableOpacity>

                                <View style={styles.t1}>
                                    <Text style={styles.text2}>Dubai - Uni Emirat Arab</Text>
                                    <Image source={icons.location} style={{ width: 10, height: 10, left: 1 }} />
                                    <Text style={styles.text2}>(999mm) Umm Suqeim 3</Text>
                                </View>
                            </View>
                            <View >
                                <Text style={[styles.text3, { textAlign: 'right' }]}>$ 999</Text>
                                <Text style={[styles.text4, { textAlign: 'right' }]}>Per Night</Text>
                            </View>
                        </View>

                        <View style={styles.horizontalLine}></View>

                        <View>
                            <Text style={styles.text5}>Hotel details</Text>
                            <Text style={styles.text4}>{text}</Text>
                            <TouchableOpacity onPress={toggleText}>
                                <Text style={styles.lessButton}>{isExpanded ? 'Less' : 'More'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ReviewSumery />

                    <View style={styles.tText}>
                        <Text style={styles.text5}>Hotel details</Text>
                        <Text style={{ color: COLORS.primary, marginLeft: 210 }}>View All</Text>
                    </View>

                    <View style={{ padding: 10, marginLeft: 10, marginRight: 20 }}>
                        <FlatList
                            data={slides2}
                            renderItem={({ item }) => <ImgDetails item={item} />}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            pagingEnabled
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}
                        />

                        <View style={styles.horizontalLine}></View>
                    </View>

                    <View>
                        <View style={styles.tText}>
                            <Text style={styles.text5}>Reviews (33)</Text>
                            <Text style={{ color: COLORS.primary, marginLeft: 210 }}>View All</Text>
                        </View>

                        <ReviewUsers />
                    </View>

                    <Image source={mapImg} resizeMode="cover" style={styles.image2} ></Image>

                    <Button style={styles.button} variant='primary'>Reserve Room</Button>

                </View>
            </ScrollView>


        </View>

    )
}

export default InfoRoom

const slides2 = [
    {
        url: require('../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../assets/images/review_img.png'),

    },
    {
        url: require('../../../assets/images/review_img.png'),

    },

];

const styles = StyleSheet.create({

    container: {
        alignItems: 'stretch',
    },

    container2: {
        width: '100%', // Độ rộng của khung bên ngoài
        height: '100%', // Độ cao của khung bên ngoài
        alignItems: 'stretch',
        padding: 10,
    },

    image: {
        width,
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 21,
        height: 0.2 * height,
        justifyContent: 'flex-end',
    },

    image2: {
        width: '100%', // Độ rộng của khung bên ngoài
        height: 200, // Độ cao của khung bên ngoài

    },

    t: {
        flex: 1
    },

    t1: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        zIndex: 1,
        marginLeft: 20,
        top: 10,
        marginRight: 20,
        marginBottom: 25,
    },

    tText: {
        zIndex: 1,
        marginLeft: 20,
        top: 10,
        marginRight: 20,
        marginBottom: 25,
        flexDirection: 'row',
    },

    text1: {
        fontSize: 30,
        fontFamily: FONT.bold
    },

    text2: {
        fontSize: 10,
        fontFamily: FONT.regular
    },

    text3: {
        fontSize: 22,
        fontFamily: FONT.bold
    },

    text4: {
        fontSize: 12,
        fontFamily: FONT.regular
    },

    text5: {
        fontSize: 16,
        fontFamily: FONT.regular
    },

    horizontalLine: {
        borderBottomWidth: 3,
        borderBottomColor: COLORS.gray2, // Màu sắc của đường gạch ngang
        marginVertical: 10, // Khoảng cách dọc giữa đường gạch ngang và phần còn lại
    },

    lessButton: {
        fontSize: 14,
        color: COLORS.primary,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

    button: {
        width: '80%',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 45,
        backgroundColor: COLORS.primary,
        color: COLORS.secondary,
    }
});