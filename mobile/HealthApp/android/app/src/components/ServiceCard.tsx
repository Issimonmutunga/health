import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginVertical: 12,
    // Removed shadow properties
    elevation: 0, // Android shadow
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    width: '48%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
});
