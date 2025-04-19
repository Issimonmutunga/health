import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../styles/MenuCard';

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
export default MenuCard;

