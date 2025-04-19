import { StyleSheet } from 'react-native';

const HomeScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F4F6',
    },
    loginButton: {
      position: 'absolute',
      top: 40,
      left: 16,
      zIndex: 10,
      padding: 6,
      borderRadius: 30,
      backgroundColor: 'white',
      elevation: 3,
    },
    loginIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    scroll: {
      paddingTop: 100,
      paddingHorizontal: 16,
      paddingBottom: 24,
    },
    heroWrapper: {
      marginBottom: -40,
      zIndex: 1,
    },
    overlay: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      zIndex: 2,
    },
  });

export default HomeScreen;
