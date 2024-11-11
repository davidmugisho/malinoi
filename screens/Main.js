
//loading tasks

// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import axios from 'axios';

// const Main = ({ navigation, route }) => {
//     const user = route?.params?.user || { full_name: 'Guest' };

//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null); // Track any errors

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const response = await axios.get('https://yourapi.com/tasks'); // Replace with your actual tasks endpoint
//                 setTasks(response.data.tasks || []); // Ensure tasks is an array, even if empty
//             } catch (error) {
//                 console.error('Error fetching tasks:', error);
//                 setError('Failed to load tasks. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTasks();
//     }, []);

//     return (
//         <View style={{ backgroundColor: '#eee', flex: 1 }}>
//             <View style={{ backgroundColor: '#62D2C3' }}>
//                 <Text style={{
//                     color: '#FFF', fontSize: 18,
//                     textAlign: 'center', fontWeight: 'bold', marginBottom: 15
//                 }}>
//                     Welcome {user.full_name}
//                 </Text>
//             </View>

//             <View style={{ padding: 20 }}>
//                 <Text style={{ fontWeight: 'bold' }}>Tasks List</Text>
//                 <View style={{
//                     backgroundColor: '#fff',
//                     padding: 10,
//                     elevation: 2,
//                     borderRadius: 10
//                 }}>
//                     <Text style={{ fontWeight: 'bold' }}>Daily Tasks</Text>
//                     <ScrollView>
//                         {loading ? (
//                             <Text>Loading tasks...</Text>
//                         ) : error ? (
//                             <Text style={{ color: 'red' }}>{error}</Text>
//                         ) : tasks.length > 0 ? (
//                             tasks.map((task, index) => (
//                                 <View key={index}>
//                                     <Text>{task}</Text>
//                                 </View>
//                             ))
//                         ) : (
//                             <Text>No tasks available</Text>
//                         )}
//                     </ScrollView>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default Main;


import React from 'react';
import { View, Text } from 'react-native';

const Main = ({ route }) => {
    const user = route?.params?.user || { full_name: 'Guest' };

    return (
        <View style={{ backgroundColor: '#000080', flex: 1 }}>
            <View style={{ backgroundColor: '#fff' }}>
                <Text style={{
                    color: '#0072ff', fontSize: 18,
                    textAlign: 'center', fontWeight: 'bold', marginBottom: 15
                }}>
                    Welcome {user.full_name}
                </Text>
            </View>

            <View style={{ padding: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Main Page</Text>
                <View style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    elevation: 2,
                    borderRadius: 10
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Enjoy your experience!</Text>
                </View>
            </View>
        </View>
    );
};

export default Main;