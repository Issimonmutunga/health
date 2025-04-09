import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceCard: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Location'); // Ensure this matches the screen name in your navigator
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Service Points</Text>
      <Text style={styles.subtitle}>Check it Out on the Map!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Locations</Text>
      </TouchableOpacity>
      <Image source={require('../assets/images/image.png')} style={styles.mapImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    position: 'relative',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 13, color: '#666' },
  button: {
    backgroundColor: '#C08457',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  mapImage: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default ServiceCard;
