import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT } from '../../constants/theme';
import icons from '../../constants/icons';

const ReviewSummary = () => {
    const reviewCounts = {
        5: 20,
        4: 100,
        3: 50,
        2: 20,
        1: 10
    };

    const maxReviewCount = Math.max(...Object.values(reviewCounts));
    const totalReviews = Object.values(reviewCounts).reduce((acc, count) => acc + count, 0);

    // Tính toán chiều rộng tối đa của container chứa các thanh ngang
    const maxContainerWidth = 350; // Đặt giá trị tùy ý
    const maxWidthPercentage = 0.8; // Đặt phần trăm tối đa của chiều rộng khung

    const renderStars = () => {
        const stars = [];
        for (let i = 5; i >= 1; i--) {
            const percentage = (reviewCounts[i] / maxReviewCount) * 100;
            const width = (percentage * maxWidthPercentage) / 100 * maxContainerWidth;
            stars.push(
                <View key={i} style={{ flexDirection: 'row', textAlign: 'right', marginBottom: 5, marginLeft: 10 }}>
                    <Text style={styles.starRating}>{i}</Text>
                    <Image source={icons.star} style={{ width: 10, height: 10, marginLeft: 3 }} />
                    <View style={[styles.starContainer, { width }]}>
                        <View style={{ flex: 1, backgroundColor: COLORS.primary, height: 10 }} />
                    </View>
                </View>
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.t1}>4.7</Text>
                <View style={{ left: 10 }}>
                    <Text style={styles.t2}>Review summary</Text>
                    <Image source={icons.star} style={{ width: 10, height: 10, marginLeft: 3 }} />
                </View>
            </View>
            <View style={styles.starsContainer}>
                {renderStars()}
            </View>
            <Text style={styles.totalReviewCount}>Total reviews: {totalReviews}</Text>
        </View>
    );
};

export default ReviewSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignItems: 'flex-start',
        left: 26,
        right: 40,
        borderRadius: 20,
        marginBottom: 21,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxWidth: 362,
        maxHeight: 220
    },
    t1: {
        fontSize: 30,
        fontFamily: FONT.bold,
        color: COLORS.black,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    t2: {
        fontSize: 15,
        fontFamily: FONT.regular,
        marginLeft: 10,
    },
    starRating: {
        fontSize: 15,
        fontFamily: FONT.regular,
        marginRight: 5
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        height: 10,
        marginLeft: 5
    },
    starsContainer: {
        width: '100%', // Width 100% để đảm bảo không bị dài quá khung
        overflow: 'hidden', // Ẩn bất kỳ phần nào vượt ra ngoài khung
    },
    totalReviewCount: {
        fontSize: 14,
        fontFamily: FONT.regular,
        marginTop: 10,
        marginLeft: 10
    }
});
