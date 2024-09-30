import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
      <ImageBackground source={require("./assets/Beige Minimal Pet Dog Instagram Story.jpg")} 
      blurRadius={3} style={{flex:1, justifyContent:'center'}} resizeMode='center' >
        <Text style={styles.text}></Text>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
