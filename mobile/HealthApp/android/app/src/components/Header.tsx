import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/HeaderStyles';

const Header: React.FC = () => (
  <View style={styles.container}>
    <Image source={require('../assets/images/image.jpeg')} style={styles.menuIcon} />
    <Image source={require('../assets/icons/image.jpeg')} style={styles.logo} />
    <Text style={styles.subtitle}>Medical Laboratory</Text>
  </View>
);

export default Header;
