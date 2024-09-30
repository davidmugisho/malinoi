import React from "react";
import { View, Text, ImageBackground, Button, TouchableOpacity } from "react-native";

const Splash = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/Beige Minimal Pet Dog Instagram Story.jpg")}
      style={{ flex: 1,
        width:'100%',
        height:'100%'
       }}
       resizeMode="cover"

    >
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: adds semi-transparent background to make text more readable
          flex: 1,
          padding: 20,
          justifyContent: "space-around",
          alignItems: "center",
          width:'100%'
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            marginVertical: 15,
          }}
        >
          Travelling with Dog
        </Text>

        <Text style={{textAlign:'center'}}>
          Your journey to a happier, healthier, and more connected life with your dog begins here.
          Discover tips, track your dog's health, connect with a community of dog lovers, and more.
          Let’s make every tail wag worth it!
          {"\n\n"}
          Are you ready to embark on this pawsome adventure?
          <Text style={{color:'red'
          }}> Click Get Started below to begin.</Text>
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "#007BFF", // Blue background
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10, // Rounded corners
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#fff", // White text color
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Splash;
