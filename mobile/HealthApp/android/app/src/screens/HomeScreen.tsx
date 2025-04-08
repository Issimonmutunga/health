import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import MenuCard from '../components/MenuCard';
import ServiceCard from '../components/ServiceCard';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Login Button with Image */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../assets/images/profile.jpeg')}//Profile ICON
          style={styles.loginIcon}
        />
      </TouchableOpacity>

      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.heroWrapper}>
          <HeroCard />
        </View>
        <View style={styles.overlay}>
          <MenuCard
            title={'Our Services'}
            description={'To be Added'}
            icon={require('../assets/icons/image.jpeg')}
          />
          <ServiceCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loginButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    padding: 6,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 3,
  },
  loginIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  scroll: {
    paddingTop: 100,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  heroWrapper: {
    marginBottom: -40,
    zIndex: 1,
  },
  overlay: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 2,
  },
});
