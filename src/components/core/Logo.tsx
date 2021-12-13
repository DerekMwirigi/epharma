import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { theme } from '../../core/theme';

export default function Logo() {
  return <Image height={30} width={30} source={require('../../../assets/logos/logo2.png')} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    borderColor: theme.colors.primary
  },
});
