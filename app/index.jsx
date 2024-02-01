import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT } from '../constants/theme';
import icons from '../constants/icons';
import { Link } from 'expo-router';

const image = require('../assets/images/startBg.png');

export default function Page() {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.iconContainer}>
            <Image source={icons.building} style={styles.iconBuilding}/>
          </View>
          <Text style = {styles.logo}>
              Peshot
          </Text>
          <View style = {styles.wrapDes}>
            <Text style={styles.text}>Welcome to peshot</Text>
            <Text style = {styles.des}> Book easy and cheap hotels only on Peshot</Text>
          </View>
          <View style = {styles.routess}>
            <Link style= {styles.button} href="/auth">
              <View style = {styles.textButton}>Let's Start</View>
            </Link>
            <Text style = {styles.des}>
              Click to continue
            </Text>
          </View>
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
    marginBottom: 12,
    width: 95,
    height: 95,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    borderRadius: 16,
  },
  logo: {
    fontSize: 46,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: FONT.montserrat
  },
  wrapDes: {
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: FONT.montserrat
  },
  des: {
    color: 'white',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: FONT.montserrat
  },
  routess: {
    alignItems: 'center',
    gap: 24
  },
  button: {
    width: 354,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    color: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '60%',
  },
  textButton: {
    fontFamily: FONT.montserrat,
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    textAlignVertical: 'center',
  }
});
