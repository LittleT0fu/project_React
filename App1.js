import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Styles from "./components/Styles";
import TextInputExample from "./components/TextInputExample";
import Cat from "./components/Cat";
import Cafe from "./components/Cafe";

const App = () => {
  const showData = () => {
    alert("Hello Cliker")

  };

  return (
    <View /*style={Styles.container}*/>
      <Text style={[Styles.title, Styles.waring]}>Hello React Native</Text>
      <Logo />
      <Button 
        title="Don't Click Me"
        onPress={showData} />

        
      {/* <TextInputExample/> */}
      {/* <StyleSheet/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  );
};

export default App;
