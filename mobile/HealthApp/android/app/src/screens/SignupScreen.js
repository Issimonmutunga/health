import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/signup',{ email, password });
            console.log('All good!',response.data);
            navigation.navigate('Login');
        } catch (err) {
            setError('Signup failed')
        }
    };
    return(
        <View>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
            <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}/>
            {error ? <Text>{error}</Text> : null}
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
}