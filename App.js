import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://i.pinimg.com/1200x/00/46/15/00461568c80482f4d6ebbb0fe180eaeb.jpg' };

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
