import react, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import axios from "axios";

const Signup = ({navigation}) => {

    // REACT HOOK
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    // Create a function to post the signup
    // Issues from Backend! Always the API return code 400
    const signupHandler = () => {

        axios.post('http://test.ecoforest.green/api/v1/auth/create-account', {
            full_name: fullName,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                // setError(response)
            })
            .catch(function (error) {
                const {
                    data,
                    status,
                    statusText,
                } = error.response;

                console.log('error: ', data.message);
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


        <Text style={{}}>
            welcome onboard!
        </Text>
        <Text> Lets help you in completing your tasks</Text>

        <View style={{ width: '100%' }}>
            <Text>Full Name</Text>
            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setFullname}
                value={fullName}
                placeholder="Mary Eliot"
            />

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
            <Button style={{ marginTop: 10 }} title="Get Started" onPress={() => {
                console.log('ok');
                signupHandler();
            }} ></Button>


            <TouchableOpacity onPress={() => {
                navigation.navigate('Login')
            }}
            >
                <Text>Do you want to sign in? </Text>

            </TouchableOpacity>


        </View>


    </View>
}

export default Signup;
