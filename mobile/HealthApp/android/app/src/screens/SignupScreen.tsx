import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Platform } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

interface SignupScreenProps {
  navigation: any;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
        role,
      });
      console.log('All good!', response.data);
      navigation.navigate('Login');
    } catch (err: any) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors.map((e: any) => e.msg).join('\n'));
      } else {
        setError('Signup failed');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.pickerWrapper}>
        <Text style={styles.pickerLabel}>Role</Text>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Patient" value="patient" />
          <Picker.Item label="Doctor" value="doctor" />
        </Picker>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignup} color="#00C853" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    color: '#00E676',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFF',
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  pickerLabel: {
    color: '#ccc',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  picker: {
    color: '#fff',
    height: Platform.OS === 'ios' ? 150 : 50,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 10,
  },
  error: {
    color: '#FF5252',
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default SignupScreen;
