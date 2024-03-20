import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import icons from "../../constants/icons";

const FilterModal = ({modalVisible, setModalVisible}) => {
    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style = {styles.modalContainer} >
                <View style = {styles.header}>
                    <Text style = {{textAlign: 'center', fontSize: 20, fontFamily: FONT.bold}}>Filter</Text>
                    <TouchableOpacity style = {styles.wrapClose} onPress={() => setModalVisible(false)}>
                        <Text style = {styles.close}>⨉</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.journey}>
                    <TouchableOpacity style = {styles.button}>
                        <Image style = {{width: 28, height: 28 }} source = {icons.plane1}/>
                        <Text style = {{fontSize: 14, fontFamily: FONT.regular, color: COLORS.white}}>Departure</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Image style = {{width: 28, height: 28 }} source = {icons.plane2}/>
                        <Text style = {{fontSize: 14, fontFamily: FONT.regular, color: COLORS.white}}>Destination</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.options}>
                    <View style = {styles.row}>
                        <Text>Price range</Text>
                        {/* Component Select Price */}
                    </View>
                    <View style = {styles.row}>
                        <Text>Number of Person</Text>
                    </View>
                </View>
            </View>
        </Modal>
     );
}
 
export default FilterModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        paddingVertical:20, 
        position: 'relative',
    },
    wrapClose: {
        position: 'absolute',
        right: 30,
        top: 20,
    },
    close: {
        fontSize: 20,
    },
    journey: {
        paddingHorizontal: 30,
        gap: 20,
        marginVertical: 20,
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 10,
    }
})