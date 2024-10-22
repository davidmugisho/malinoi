// import react, { useState } from "react";
// import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native";
// import axios from 'axios';

// const Login = ({ navigation }) => {
//     console.log('Login screen loaded');

//     // REACT HOOK
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [error, setError] = useState('');

//     // Create a function to Log in
//     const LoginHandler = () => {

//         axios.post('http://test.ecoforest.green/api/v1/auth/login', {
//             email: email,
//             password: password
//         })
//             .then(function (response) {
//                 setError('');

//                 //If successfully Navigate to The Main Screen
//                 navigation.navigate('Main', {
//                     user: response.data.user,
//                     token: response.data.token
//                 })
//             })
//             .catch(function (error) {
//                 const {
//                     data,
//                     status,
//                     statusText,
//                 } = error.response;

//                 console.log('error: ', data?.message);
//                 setError(data.message)
//             });
//     }

//     return <View style={{
//         backgroundColor: '#eee',
//         flex: 1,
//         padding: 20,
//         // justifyContent: 'center',
//         alignItems: 'center'
//     }} >


//         <Text style={{ fontWeight: 'bold' }}>
//             Welcome back!
//         </Text>
//         <Image style={{ height: 200, width: 200, alignSelf: 'center' }}
//             source={require('../assets/welcome.jpg')} />


//         <View style={{ width: '100%' }}>

//             <Text>Email</Text>

//             <TextInput
//                 style={{
//                     padding: 10,
//                     borderRadius: 15,
//                     backgroundColor: '#fff',
//                     width: '100%',
//                     fontWeight: 'bold'
//                 }}
//                 onChangeText={setEmail}
//                 value={email}
//                 placeholder="dav.mug@mail.com"
//             />


//             <Text>Password</Text>

//             <TextInput
//                 style={{
//                     padding: 10,
//                     borderRadius: 15,
//                     backgroundColor: '#fff',
//                     width: '100%',
//                     fontWeight: 'bold'
//                 }}
//                 onChangeText={setPassword}
//                 value={password}
//                 placeholder="*********"
//                 secureTextEntry
//             />

//             {/* TODO : confirmPassword */}
//             <Text style={{ color: 'red' }}>{error}</Text>
//             <Button style={{ marginTop: 10 }} title="LOGIN" onPress={() => {
//                 console.log('ok');
//                 LoginHandler();
//             }} ></Button>

//             <TouchableOpacity onPress={() => {
//                 navigation.navigate('Signup')
//             }}
//             >
//                 <Text style={{color:'red'}}>Do you want to sign up? </Text>

//             </TouchableOpacity>


//         </View>


//     </View>
// }

// export default Login;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
    console.log('Login screen loaded');

    // REACT HOOK
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state

    // Create a function to Log in
    const LoginHandler = () => {
        setLoading(true);  // Show loading spinner
        axios.post('http://test.ecoforest.green/api/v1/auth/login', {
            email: email,
            password: password
        })
        .then(function (response) {
            setError('');
            setLoading(false);  // Hide loading spinner

            // Navigate to the Main Screen after successful login
            navigation.navigate('Main', {
                user: response.data.user,
                token: response.data.token
            });
        })
        .catch(function (error) {
            setLoading(false);  // Hide loading spinner
            if (error.response) {
                const { data } = error.response;
                console.log('error: ', data?.message || 'An error occurred');
                setError(data?.message || 'Login failed, please try again');
            } else {
                console.log('Network error: ', error.message);
                setError('Network error, please check your connection');
            }
        });
    };

    return (
        <View style={{
            backgroundColor: '#eee',
            flex: 1,
            padding: 20,
            alignItems: 'center'
        }}>
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
                    placeholder="dav.mug@mail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
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

                <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>

                {/* Display loading spinner when logging in */}
                {loading ? (
                    <ActivityIndicator size="large" color="#007bff" />
                ) : (
                    <Button 
                        title="LOGIN" 
                        onPress={LoginHandler} 
                    />
                )}

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: 'red', marginTop: 10 }}>Do you want to sign up?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
