import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from '../../../components/ui/button';
import Search from '../../../components/home/search';


const image = require('../../../assets/images/home_1.png');

const Home = () => {
    return (
        <View>

            {/* <Image source={image} height={20} width={20} /> */}
            <Button variant='primary'>View Deitel</Button>
            <Search />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

});


