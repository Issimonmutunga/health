import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login success:', response.data);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.buttonSpacing}>
        <Button title="Login" onPress={handleLogin} color="#2196F3" />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} color="#4CAF50" />
      </View>
      <View style={styles.forgorpassword}>
        <Button title = "Forgot Password ?" onPress={handleLogin} color="#2196F3" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  forgorpassword: {
    marginTop : 20,
  },
});

export default LoginScreen;
