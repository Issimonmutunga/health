import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header: React.FC = () => (
  <View style={styles.container}>
    <Image source={require('../assets/images/image.jpeg')} style={styles.menuIcon} />
    <Image source={require('../assets/icons/image.jpeg')} style={styles.logo} />
    <Text style={styles.title}>Dr Jeff Nyakabi Clinic</Text>
    <Text style={styles.subtitle}>Medical Laboratory</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', alignItems: 'center' },
  menuIcon: { width: 24, height: 24, position: 'absolute', left: 16 },
  logo: { width: 32, height: 32, marginVertical: 8 },
  title: { fontSize: 18, fontWeight: '600', color: '#7A2C18' },
  subtitle: { fontSize: 12, color: '#A07350' },
});

export default Header;
