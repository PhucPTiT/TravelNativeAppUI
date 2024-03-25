import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import icons from "../../../constants/icons";
import  { COLORS, FONT } from "../../../constants/theme";

const DetailTicket = () => {
    const {id} = useLocalSearchParams();

    const item = {
        firm: 'SPRING HOTEL',
        codeRoom: '501',
        service: 'Vip',
        quantity: '2',
        namePassenger: 'Phuc, Nguyen Doan Duc',
        date: '17/02/2022',
        checkin: '17/02/2022',
        checkout: '18/02/2022',
        timein: '14:40',
        timeout: '12:00',
    }

    return ( 
        <View style = {styles.detailTicket}>
            <ScrollView>
                <Stack.Screen
                    options={{
                        headerTintColor: '#000',
                        headerShadowVisible: false
                    }}
                />
                <View style = {styles.header}>
                    <Text style = {styles.firm}>{item.firm}</Text>
                    <Text style = {{fontSize: 20, fontFamily: FONT.bold}}>Ticket Room</Text>
                </View>
                <View style = {styles.body}>
                    <View style = {styles.info}>
                        <View style= {styles.row}>
                            <Text style= {{fontSize: 20, fontFamily: FONT.medium}}>Room: </Text>
                            <Text style= {{fontSize: 20, fontFamily: FONT.bold}}>{item.codeRoom}</Text>
                        </View>
                        <View style= {styles.row}>
                            <Text style= {{fontSize: 20, fontFamily: FONT.medium}}>Service</Text>
                            <Text style= {{fontSize: 20, fontFamily: FONT.bold}}>{item.service}</Text>
                        </View>
                        <View style= {styles.row}>
                            <Text style= {{fontSize: 20, fontFamily: FONT.medium}}>Quantity</Text>
                            <Text style= {{fontSize: 20, fontFamily: FONT.bold}}>{item.quantity}</Text>
                        </View>
                    </View>
                    <View style = {styles.detail}> 
                        <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>Hanh Khach</Text>
                        <Text style = {styles.passenger}>{item.namePassenger}</Text>
                    </View>
                    <View style = {styles.row}>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>NGAY</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>{item.date}</Text>
                        </View>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>CHECKIN</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>{item.checkin}</Text>
                        </View>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>CHECKOUT</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>{item.checkout}</Text>
                        </View>
                    </View>
                    <View style = {styles.row}>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>TIMEIN</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>{item.timein}</Text>
                        </View>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>TIMEOUT</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>{item.timeout}</Text>
                        </View>
                    </View>
                    <View style = {styles.row}>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>REQUEST</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>-----</Text>
                        </View>
                        <View>
                            <Text style = {{fontSize: 20, fontFamily: FONT.medium}}>SSR CODE</Text>
                            <Text style = {{fontSize: 16, fontFamily: FONT.bold }}>CBFS</Text>
                        </View>
                    </View>
                    <View style = {styles.attention}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: FONT.regular,
                            width: '80%',
                            textAlign: 'center',
                        }}>
                            Lưu ý: Nếu có bất kì thắc mắc hay cần sự trợ giúp, Hãy liên hệ với bộ phận chăm sóc khách hàng của chúng tôi qua số điện thoại 19001900
                        </Text>
                    </View>
                    <View style = {styles.straight}>
                </View>
                </View>
                <View style = {styles.footer}>
                    <Image 
                        style={styles.SearchResultImage}
                        source={{
                            uri: "https://qrcode-gen.com/images/qrcode-default.png", 
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
 
export default DetailTicket;

const styles = StyleSheet.create({
    detailTicket: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 30,
        paddingVertical:6,
    },
    firm: {
        fontSize: 30,
        fontFamily: FONT.bold
    },
    body: {
        paddingHorizontal: 30,
    },
    journey: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: FONT.regular
    },
    short: {
        fontSize: 32,
        fontFamily: FONT.bold
    },
    planeIcon: {
        width: 28,
        height: 28,
    },
    detail: {
        marginBottom: 20,
    },
    passenger: {
        fontSize: 20,
        fontFamily: FONT.bold,
    },
    row: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    attention: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    straight: {
        height:2,
        backgroundColor: COLORS.gray,
        marginHorizontal: -30
    },
    footer: {
        alignContent: 'center',
    },
    SearchResultImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    }
})

