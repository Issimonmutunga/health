import { StyleSheet,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const SignupScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      padding: 24,
    },
    header: {
      color: '#00C853',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
      width: windowWidth * 0.9, //Dynamically Scale width based on screen size
    },
    input: {
      backgroundColor: '#F5F5F5',
      color: '#000',
      padding: 20,
      marginBottom: 20,
      borderRadius: 25,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    pickerWrapper: {
      backgroundColor: '#F5F5F5',
      borderRadius: 25,
      marginBottom: 35,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    pickerLabel: {
      color: '#555',
      paddingHorizontal: 16,
      paddingTop: 12,
      textAlign: 'center', // Added for proper alignment
      paddingBottom: 10,
    },
    picker: {
      color: '#000',
      height: 60, // Adjusted height for better alignment
      width: '100%',
      fontSize: 18,
  },
    buttonContainer: {
      marginTop: 20,
    },
    error: {
      color: '#FF5252',
      marginBottom: 15,
      textAlign: 'center',
    },
  });
export default SignupScreen;
