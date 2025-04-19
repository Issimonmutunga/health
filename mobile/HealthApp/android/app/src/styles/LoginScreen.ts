import { StyleSheet } from 'react-native';

const LoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
    padding: 14,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonSpacing: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#2196F3',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
