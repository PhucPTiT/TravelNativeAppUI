import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import icons from "../../constants/icons";
import Slider from '@react-native-community/slider';
import { useState } from "react";
import { Switch } from "react-native-web";
import ChooseVehilce from "./chooseVehicle";
import Button from "../ui/button";

const FilterModal = ({modalVisible, setModalVisible}) => {
    const [person, setPerson] = useState(1);
    const [tripType, setTripType] = useState('round-trip'); // Add state for trip type

    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style = {styles.modalContainer} >
                <ScrollView showsVerticalScrollIndicator = {false}>
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
                        <View  style = {{
                                borderBottomColor: COLORS.lightGray,
                                borderBottomWidth: 2,
                                paddingBottom: 30,
                            }}>
                            <Text style = {{fontFamily: FONT.semibold, fontSize: 16, color: COLORS.gray3, marginBottom: 8}}>Price range</Text>
                            <View style = {styles.row}>
                                <View style = {{flex: 1}}>
                                    <Text style = {{fontFamily: FONT.semibold, fontSize: 14, color: COLORS.gray3}}>Min</Text>
                                    <TextInput
                                        style={styles.inputStyle}
                                        keyboardType='numeric'
                                        value="100000"
                                    />
                                </View>
                                <View style = {{flex: 1}}>
                                    <Text style = {{fontFamily: FONT.semibold, fontSize: 14, color: COLORS.gray3}}>Max</Text>
                                    <TextInput
                                        style={styles.inputStyle}
                                        keyboardType='numeric'
                                        value="100000000"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style = {{
                                borderBottomColor: COLORS.lightGray,
                                borderBottomWidth: 2,
                                paddingBottom: 30,
                            }}>
                            <Text style = {{fontFamily: FONT.semibold, fontSize: 16, color: COLORS.gray3}}>Number of Person</Text>
                            <View>
                                <Text style = {{fontFamily: FONT.semiboldI, fontSize: 20, color: COLORS.black}}> {Math.floor(person)}</Text>
                                <Slider
                                    style = {{}}
                                    onValueChange={(value) => setPerson(value)}
                                    minimumValue={1}
                                    maximumValue={50}
                                />
                            </View>
                        </View>
                        <View style = {{
                                borderBottomColor: COLORS.lightGray,
                                borderBottomWidth: 2,
                                paddingBottom: 30,
                            }}>
                            <Text style = {{fontFamily: FONT.semibold, fontSize: 16, color: COLORS.gray3, marginBottom: 8 }}>Trip Type</Text>
                            <View style={styles.row}>
                                <TouchableOpacity
                                    style={[styles.tripTypeButton, tripType === 'round-trip' && styles.selectedTripTypeButton]}
                                    onPress={() => setTripType('round-trip')}
                                >
                                    <Text style={[styles.tripTypeButtonText, tripType === 'round-trip' && styles.selectedTripTypeButtonText]}>Round Trip</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.tripTypeButton, tripType === 'one-trip' && styles.selectedTripTypeButton]}
                                    onPress={() => setTripType('one-trip')}
                                >
                                    <Text style={[styles.tripTypeButtonText, tripType === 'one-trip' && styles.selectedTripTypeButtonText]}>One Trip</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <ChooseVehilce/>
                        </View>
                    </View>
                    <Button variant="primary" style={{
                        width: '80%',
                        borderRadius: 30,
                        alignSelf: 'center',
                        marginVertical: 30,
                    }}>Apply</Button>
                </ScrollView>
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
    },
    options: {
        paddingHorizontal: 30,
        gap: 20,
    },  
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },
    inputStyle: {
        height: 40,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 20,
        fontFamily: FONT.boldI,
        fontSize: 16,
    },
    tripTypeButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    selectedTripTypeButton: {
        backgroundColor: COLORS.primary,
    },
    tripTypeButtonText: {
        fontFamily: FONT.regular,
        fontSize: 14,
        color: COLORS.primary,
    },
    selectedTripTypeButtonText: {
        color: COLORS.white,
    },
})