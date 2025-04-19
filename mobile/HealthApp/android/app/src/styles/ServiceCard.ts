import { StyleSheet } from 'react-native';

const ServiceCard = StyleSheet.create({
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

export default ServiceCard;
