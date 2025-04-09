import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeroCard: React.FC = () => (
  <View style={styles.card}>
    <Text style={styles.heading}>Visit us</Text>
    <Text style={styles.desc}>Your Partners in Diagnosis</Text>
    <Text style={styles.chat}>Chat</Text>
    <Image source={require('../assets/images/image.png')} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FCD34D',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
    marginBottom: 16,
  },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  desc: { fontSize: 14, color: '#333' },
  chat: {
    marginTop: 12,
    color: '#C2410C',
    fontWeight: '600',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HeroCard;
