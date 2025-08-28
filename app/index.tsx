import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        React Native
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Sample Demonstration of React Native</Text>
        <Image
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty.png",
          }}
          style={{ width: 200, height: 300 }}
        />
      </View>
      <TextInput
        style={{
          width: "80%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;
