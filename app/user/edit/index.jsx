import { Stack } from "expo-router";
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT } from "../../../constants/theme";
import Avatar from "../../../components/ui/avatar";
import icons from "../../../constants/icons";
import Item from "../../../components/user/edit/item";
import { useState } from "react";
import BoxHandleImage from "../../../components/user/edit/boxImage";

const EditProfile = () => {
    const [imageUri, setImageUri] = useState(image); 
    const [modalVisible, setModalVisible] = useState(false)

    const handleChoosePhoto = () => {
        setModalVisible(false);
    }

    return ( 
        <View style = {styles.editPage}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'rgb(242,242,242)' },
                    headerTintColor: '#000',
                    headerShadowVisible: false
                }}
            />
            <Text style = {styles.edit}>Edit Profile</Text>
            <View style = {styles.wrapAvatar}  >
                <Avatar
                    imageBase64={image}
                    style = {styles.avatar}
                />
                <TouchableOpacity  onPress={() => setModalVisible(true)} style = {styles.wrapCam}><Image source={icons.camera} style={styles.iconCamera}/></TouchableOpacity>
            </View>
            {list.map((item, index) => (
                <Item key = {index} field={item.field} text = {item.text} />
            ))}

            <BoxHandleImage
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleChoosePhoto={handleChoosePhoto}
            />
            

        </View>
    );
}
 
export default EditProfile;

const styles = StyleSheet.create({
    editPage: {
        paddingHorizontal: 30,
    },
    edit: {
        fontSize:30,
        fontFamily: FONT.bold,
    },
    wrapAvatar: {
        width: '100%',
        alignItems:'center',
        paddingVertical: 24,
        position: 'relative'
    },
    wrapCam: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 24,
        right: '36%',
    },
    iconCamera: {
        width: 20,
        height: 20,
    }



})

const image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="

const list = [
    {
        field: "Username",
        text: "Nguyen Doan Duc Phuc",
    },
    {
        field: "Email",
        text: "phucdeptrai@gmail.com",
    },
    {
        field: "Phone",
        text: "0123456789",
    },
    {
        field: "Date of Birth",
        text: "11/11/2000",
    },
    {
        field: "Address",
        text: "Canberra ACT 2601, Australia",
    },


]