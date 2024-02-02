import React, { useRef, useState, useEffect } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import SlideItem from "../../components/slideItem";
import Pagination from "../../components/pagination";
import Button from "../../components/ui/button";
import { useRouter } from "expo-router";

const Auth = () => {
    const { width, height } = Dimensions.get('screen');
    const [activeIndex, setActiveIndex] = useState(0);

    const flatListRef = useRef(null);

    const router = useRouter();

    const handleLogin = () => {
        router.push('/auth/login')
    }

    const handleSignup = () => {
        router.push('/auth/signup')
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = activeIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0; 
            }
            flatListRef.current.scrollToIndex({ index: nextIndex });
        }, 2000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / width);
        setActiveIndex(index);
    };

    return ( 
        <View style = {{flexDirection: "column", height: height, alignItems: "space-between"}}>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={slides}
                    renderItem={({ item }) =>
                        <SlideItem item={item}/>
                    }
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
    
                <Pagination data={slides} activeIndex={activeIndex}/>
            </View>
            <View style = {styles.wrapBtn}>
                <Button onPress={handleLogin} style={styles.button} variant="primary">
                    Log in
                </Button>
                <Button onPress={handleSignup} style={styles.button} variant="secondary">
                    Creat Account
                </Button>
            </View>
        </View>
    );
}

export default Auth;

const slides = [
    {
        url:'../assets/images/hotelAu.png',
        title: 'Booking hotel',
        des: 'Find the perfect accommodation for your trip'
    },
    {
        url: "../assets/images/placeAu.png",
        title: 'Searching Place',
        des: 'Discover amazing destinations around the world'
    },
    {
        url: "../assets/images/planAu.png",
        title: 'Plan your trip',
        des: 'Custom and fast planning with a low price' 
    }
];

const styles = StyleSheet.create({
    button: {
        width: '60%',
        borderRadius: 30
    },
    wrapBtn: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        justifyContent: 'flex-end',
        paddingBottom: 80,
    }
})
