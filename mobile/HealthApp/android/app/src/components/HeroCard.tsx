import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import styles from '../styles/HeroCard';

const HeroCard: React.FC = () => {
  // Properly typed navigation hook
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleWhatsAppChat = async () => {
    const phoneNumber = '+254706085240';
    const message = 'Hello! I would like to inquire...';
    const url = `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${encodeURIComponent(message)}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Error', 'Could not open WhatsApp. Please make sure it is installed.');
    }
  };

  const handleVisit = () => {
    // Now type-safe: TS will verify 'Location' exists in RootStackParamList
    navigation.navigate('Location');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Your Partners in Diagnosis</Text>

      <View style={styles.actionRow}>
        <TouchableOpacity onPress={handleWhatsAppChat} style={styles.button}>
          <Text style={styles.buttonText}> Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVisit} style={styles.button}>
          <Text style={styles.buttonText}>📍 Visit Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeroCard;
