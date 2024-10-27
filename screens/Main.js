// import react, { useState } from "react";
// import { View, Image, Text, ScrollView } from "react-native";
// import axios from 'axios';

// const Main = ({ navigation, route }) => {

//     console.log('token :::', route.params.user.full_name);

//     const [tasks, setTasks] = useState([
//         'Pick the car', 'Watch moves', 'Gym', 'Cooking'
//     ])

//     return <View style={{
//         backgroundColor: '#eee',
//         flex: 1

//     }} >
//         <View style={{ backgroundColor: '#62D2C3' }}>
//             {/* <Image style={{ marginTop: 100, borderRadius: 45, height: 90, width: 90, alignSelf: 'center' }}
//                 source={require('../assets/profile.png')} /> */}
//             <Text style={{
//                 color: '#FFF', fontSize: 18,
//                 textAlign: 'center', fontWeight: 'bold', marginBottom: 15
//             }}>
//                 Welcome {route.params.user.full_name}</Text>
//         </View>

//         <View style={{}}>
//             {/* <Image style={{ marginTop: 100, borderRadius: 45, height: 90, width: 90, alignSelf: 'center' }}
//                 source={require('../assets/profile.png')} /> */}
//         </View>
//         <View style={{ padding: 20 }}>
//             <Text style={{
//                 fontWeight: 'bold'}}>Tasks list</Text>
//             <View style={{
//                 backgroundColor: '#fff',
//                 padding: 10,
//                 elevation: 2,
//                 borderRadius: 10

//             }}>
//                 <Text style={{
//                 fontWeight: 'bold'}}>Daily Tasks</Text>
//                 <ScrollView>
//                     {

//                         tasks.map((val, key) => {
//                             return <View>
//                                 <Text>{val}</Text>
//                             </View>
//                         })
//                     }
//                 </ScrollView>
//             </View>
//         </View>


//     </View>
// }

// export default Main;



// testing route?.params?.user 


import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const Main = ({ navigation, route }) => {
    const user = route?.params?.user || { full_name: 'Guest' };
    
    console.log('User Full Name:', user.full_name);

    const [tasks, setTasks] = useState([
        'Pick the car', 'Watch movies', 'Gym', 'Cooking'
    ]);

    return (
        <View style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: '#62D2C3' }}>
                <Text style={{
                    color: '#FFF', fontSize: 18,
                    textAlign: 'center', fontWeight: 'bold', marginBottom: 15
                }}>
                    Welcome {user.full_name}
                </Text>
            </View>

            {/* <View style={{ padding: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Tasks List</Text>
                <View style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    elevation: 2,
                    borderRadius: 10
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Daily Tasks</Text>
                    <ScrollView>
                        {tasks.length > 0 ? (
                            tasks.map((task, index) => (
                                <View key={index}>
                                    <Text>{task}</Text>
                                </View>
                            ))
                        ) : (
                            <Text>No tasks available</Text>
                        )}
                    </ScrollView>
                </View>
            </View> */}
            <Image style={styles.image} source={require('../assets/beregr.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        width:'100%', 
        height: 300
    }
})

export default Main;

