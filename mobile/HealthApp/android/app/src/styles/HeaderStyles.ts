import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: { width: 24, height: 24, tintColor: '#000'},
});

export default HeaderStyles;
