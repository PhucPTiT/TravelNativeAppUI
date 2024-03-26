import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
import { COLORS, FONT } from "../../../constants/theme";
import Button from "../../../components/ui/button";
import { Stack } from "expo-router";

const image = require('../../../assets/images/order.png');

const Select = () => {
    const [seats, setSeats] = useState(Array.from({ length: 50 }, (_, index) => ({ id: index + 1, status: 'empty' })));

    const toggleSeatStatus = (id) => {
        const updatedSeats = seats.map(seat => {
            if (seat.id === id) {
                if (seat.status === 'empty') {
                    return { ...seat, status: 'selected' };
                } else if (seat.status === 'selected') {
                    return { ...seat, status: 'empty' };
                } else {
                    return seat; 
                }
            }
            return seat;
        });
        setSeats(updatedSeats);
    };

    const countSelectedSeats = () => {
        return seats.filter(seat => seat.status === 'selected').length;
    };

    const calculatePrice = () => {
        return countSelectedSeats() * 99;
    };

    const renderSeat = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.seat,
                { 
                    backgroundColor: item.status === 'empty' ? COLORS.black : item.status === 'selected' ? 'transparent' : 'red',
                    borderColor: item.status === 'selected' ? COLORS.white : 'transparent', 
                    borderWidth: item.status === 'selected' ? 1 : 0, 
                }
            ]}
            onPress={() => toggleSeatStatus(item.id)}
            disabled={item.status === 'bought'}
        >
            <Text style={[styles.seatText]}>
                {item.id}
            </Text>
        </TouchableOpacity>
    );

    const numColumns = Math.floor(Dimensions.get('window').width / 55);
    return (
        <View style={styles.selectPage}>
            <Stack.Screen
                options={{
                    headerStyle: { 
                        backgroundColor: COLORS.black2
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 22,
                        fontFamily: FONT.bold,
                        color: COLORS.white,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: COLORS.white,
                }}
                
            />
            <ImageBackground style={styles.bg} resizeMode="cover" source={image}>
                <View style={styles.listSeat}>
                    <FlatList
                        data={seats}
                        renderItem={renderSeat}
                        keyExtractor={item => item.id.toString()}
                        numColumns={numColumns}
                        contentContainerStyle={styles.seatContainer}
                    />
                    <View style={styles.legendContainer}>
                        <Text style={[styles.legendText, { backgroundColor: COLORS.black2 }]}>Empty</Text>
                        <Text style={[styles.legendText, { backgroundColor: 'red' }]}>Bought</Text>
                        <Text style={[styles.legendText, { backgroundColor: 'transparent', borderColor: COLORS.white, borderWidth: 1 }]}>Selected</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.leftBox}>
                        <Text style={{ fontSize: 30, fontFamily: FONT.bold, color: COLORS.white }}>Mandarin Oriental</Text>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontFamily: FONT.regular, fontSize: 9, color: COLORS.white }}>📍 Bang Rak, Bangkok 10500, Thailand</Text>
                            <Text>⭐⭐⭐⭐</Text>
                        </View>
                    </View>
                    <View style={styles.rightBox}>
                        <Text style={{ fontSize: 30, fontFamily: FONT.semiboldI, color: COLORS.white, textAlign: 'right' }}>{calculatePrice()} $</Text>
                        <View>
                            <Text style={{ fontSize: 12, fontFamily: FONT.medium, color: COLORS.white, marginBottom: -16 }}>Quantity: {countSelectedSeats()}</Text>
                        </View>
                        <Button disabled={1 > countSelectedSeats()} onPress={() => {}} style={styles.button}>Bookings</Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Select;

const styles = StyleSheet.create({
    selectPage: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listSeat: {
        height: '70%',
        alignItems: 'center',
    },
    seatContainer: {
        marginTop: 10,
    },
    seat: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5,
        borderWidth: 1, 
    },
    seatText: {
        color: COLORS.white,
        fontFamily: FONT.medium,
    },
    box: {
        width: '80%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 30,
        marginBottom: 100,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftBox: {
        width: '50%',
        gap: 8,
    },
    rightBox: {
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    button: {
        width: 120,
    },
    legendContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    legendText: {
        padding: 5,
        borderRadius: 5,
        color: COLORS.white,
    },
});
