import React, { useCallback } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
  Alert,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // adjust if needed
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import MenuCard from '../components/MenuCard';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/HomeScreen';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert('Content Refreshed');
    }, 1500);
  }, []);

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleLoginLongPress = () => {
    Alert.alert('Login', 'Tap to log in or create an account.');
  };

  return (
    <View style={styles.container}>
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
          <TouchableOpacity
            onPress={() => Alert.alert('Services', 'Explore our offerings')}
          >
            <MenuCard
              title="Our Services"
              description="Explore appointments, health tracking, and more"
              icon={require('../assets/icons/image.jpeg')}
            />
          </TouchableOpacity>

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
