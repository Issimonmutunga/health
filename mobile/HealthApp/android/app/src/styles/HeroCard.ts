import { StyleSheet } from 'react-native';

const HeroCard = StyleSheet.create({
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
      color: '#10B981', // green color
      marginBottom: 16,
      textAlign: 'center', // centered text
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

export default HeroCard;

