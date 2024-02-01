import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT } from '../constants/theme';
import icons from '../constants/icons';

const image = require('../assets/images/startBg.png');

export default function Page() {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.iconContainer}>
            <Image source={icons.building} style={styles.iconBuilding}/>
          </View>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498DB",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  iconBuilding: {
    marginTop: 110,
    width: 95,
    height: 95,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    borderRadius: 16,
  },
  
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
