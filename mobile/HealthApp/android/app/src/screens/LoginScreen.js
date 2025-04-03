import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log('Login success:', response.data);
        } catch (err) {
            setError('Invalid credentials');
        }
    };
    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry value='{password}' onChangeText={setPassword}/>
            { error ? <Text>{error}</Text> : null}
            <Button title='Login' onPress={handleLogin} />
            <Button title='Sign Up' onPress={() => navigation.navigate('Signup')}/>
        </View>
    );
}
