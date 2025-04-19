import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ServiceCard';

const ServiceCard: React.FC = () => {
  const navigation = useNavigation();

  const services = [
    { title: 'Book Appointment', screen: 'Appointment' },
    { title: 'Available Tests', screen: 'Tests' },
    { title: 'Online Consultancy (24/7)', screen: 'Consultancy' },
    { title: 'Charges', screen: 'Charges' },
    { title: 'Your Dashboard', screen: 'Dashboard' },
  ];

  const handlePress = (screenName: string) => {
    navigation.navigate(screenName as never);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Services</Text>
      <View style={styles.grid}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => handlePress(service.screen)}
            activeOpacity={0.7}
          >
            <Text style={styles.itemText}>{service.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ServiceCard;
