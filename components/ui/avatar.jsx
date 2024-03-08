import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const Avatar = ({ imageBase64, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{uri: imageBase64}}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: COLORS.primary, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Avatar;
