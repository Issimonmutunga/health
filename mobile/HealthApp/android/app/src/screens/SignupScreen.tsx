import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Dimensions} from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width;

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
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
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
          dropdownIconColor="#000"
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
