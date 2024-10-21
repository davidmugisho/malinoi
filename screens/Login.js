import react, { useState } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native";
import axios from 'axios';

const Login = ({ navigation }) => {
    console.log('Login screen loaded');

    // REACT HOOK
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    // Create a function to Log in
    const LoginHandler = () => {

        axios.post('http://test.ecoforest.green/api/v1/auth/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                setError('');

                //If successfully Navigate to The Main Screen
                navigation.navigate('Main', {
                    user: response.data.user,
                    token: response.data.token
                })
            })
            .catch(function (error) {
                const {
                    data,
                    status,
                    statusText,
                } = error.response;

                console.log('error: ', data?.message);
                setError(data.message)
            });
    }

    return <View style={{
        backgroundColor: '#eee',
        flex: 1,
        padding: 20,
        // justifyContent: 'center',
        alignItems: 'center'
    }} >


        <Text style={{ fontWeight: 'bold' }}>
            Welcome back!
        </Text>
        <Image style={{ height: 200, width: 200, alignSelf: 'center' }}
            source={require('../assets/welcome.jpg')} />


        <View style={{ width: '100%' }}>

            <Text>Email</Text>

            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setEmail}
                value={email}
                placeholder="mary.elliot@mail.com"
            />


            <Text>Password</Text>

            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setPassword}
                value={password}
                placeholder="*********"
                secureTextEntry
            />

            {/* TODO : confirmPassword */}
            <Text style={{ color: 'red' }}>{error}</Text>
            <Button style={{ marginTop: 10 }} title="LOGIN" onPress={() => {
                console.log('ok');
                LoginHandler();
            }} ></Button>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Signup')
            }}
            >
                <Text>Do you want to sign up? </Text>

            </TouchableOpacity>


        </View>


    </View>
}

export default Login;
