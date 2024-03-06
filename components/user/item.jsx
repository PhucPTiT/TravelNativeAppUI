import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FONT  } from '../../constants/theme'

const Item = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 354,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: FONT.medium
  },
});

export default Item;
