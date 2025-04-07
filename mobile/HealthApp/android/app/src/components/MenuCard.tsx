import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface Props {
  title: string;
  description: string;
  icon: ImageSourcePropType;
}

const MenuCard: React.FC<Props> = ({ title, description, icon }) => (
  <View style={styles.card}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
  },
  icon: { width: 32, height: 32, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '600' },
  desc: { fontSize: 12, color: '#666', textAlign: 'center' },
});

export default MenuCard;
