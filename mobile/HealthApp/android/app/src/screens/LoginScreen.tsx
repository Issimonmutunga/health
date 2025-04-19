import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/LoginScreen';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/api/login', { email, password });
      console.log('Login success:', response.data);
      navigation.navigate('Home'); // Navigate to Home or another screen after successful login
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
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
