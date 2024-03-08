import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../../../constants/theme";
import { useState } from "react";
import Popup from "./popup";

const Item = ({field, text, style}) => {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleEdit = () => {
        setEditing(true);
    };

    
    const handleSave = (newText) => {
        setEditing(false);
    }

    const handleCancel = () => {
        setEditing(false);
    };

    return ( 
        <TouchableOpacity style = {[styles.item, style]} onPress={handleEdit}>
            <Text style = {styles.field}>{field}</Text>
            {editing ? (
                <Popup initialValue={text} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <Text style={styles.text}>{editedText}</Text>
            )}
        </TouchableOpacity>
    );
}
 
export default Item;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
        marginBottom: 30,
    },
    field: {
        fontSize: 16,
        fontFamily: FONT.medium,
        color: COLORS.gray3
    },
    text: {
        fontSize: 16,
        fontFamily: FONT.medium,
        color: COLORS.black
    }
})