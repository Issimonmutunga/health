import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
