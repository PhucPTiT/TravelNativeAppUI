import React, { useState } from 'react';
import { Modal, View, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Button from '../../ui/button';

const BoxHandleImage = ({ modalVisible, setModalVisible }) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    const getCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(status === 'granted');
    };

    const handleTakePhoto = async () => {
        if (hasCameraPermission === null) {
            await getCameraPermission();
        }
        if (hasCameraPermission === false) {
            Alert.alert('No access to camera');
            return;
        }
        // handle Take Photo
    };

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result.uri);
            // Handle Choose Image
        }
    };

    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Button onPress={handleChoosePhoto} style={styles.button} variant="primary">
                        Choose Photo
                    </Button>
                    <Button onPress={handleTakePhoto} style={styles.button} variant="secondary">
                        Take Photo
                    </Button>
                    <Button onPress={() => setModalVisible(false)} style={styles.button} variant="outline">
                        Cancel
                    </Button>
                </View>
            </View>
        </Modal>
    );
}
 
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        gap: 8
    },
});

export default BoxHandleImage;
