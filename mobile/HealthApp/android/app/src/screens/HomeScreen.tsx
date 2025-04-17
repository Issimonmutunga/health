import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
  Alert,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import MenuCard from '../components/MenuCard';
import ServiceCard from '../components/ServiceCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert('Content Refreshed');
    }, 1500);
  }, []);

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleLoginLongPress = () => {
    Alert.alert('Login', 'Tap to log in or create an account.');
  };

  return (
    <View style={styles.container}>
      {/* Login Button with feedback & accessibility */}
      <Pressable
        style={styles.loginButton}
        onPress={handleLoginPress}
        onLongPress={handleLoginLongPress}
        android_ripple={{ color: '#ddd', borderless: true }}
        accessibilityLabel="Login Button"
        accessibilityHint="Tap to log in or sign up"
      >
        <Image
          source={require('../assets/icons/profile.jpeg')}
          style={styles.loginIcon}
        />
      </Pressable>

      <Header />

      <ScrollView
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.heroWrapper}>
          <HeroCard />
        </View>

        <View style={styles.overlay}>
          {/* Interactive MenuCard */}
          <TouchableOpacity
            onPress={() => Alert.alert('Services', 'Explore our offerings')}
          >
            <MenuCard
              title={'Our Services'}
              description={'Explore appointments, health tracking, and more'}
              icon={require('../assets/icons/image.jpeg')}
            />
          </TouchableOpacity>

          {/* ServiceCard interaction */}
          <TouchableOpacity
            onPress={() => Alert.alert('Service Info', 'View service details')}
          >
            <ServiceCard />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
