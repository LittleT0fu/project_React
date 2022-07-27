import { View, Text , StyleSheet } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import LotsOfGreeting from "./components/LotsOfGreeting";
import MyCustomTextWith from './components/MyCustomTextWith';
import Count from "./components/Count";
import InputText from "./components/InputText";
import UserNameandPassword from "./components/UserNameandPassword";
import UsernamePassword from "./components/UsernamePassword";
import AlertExample from "./components/AlertExample";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import TouchableExample from "./components/TouchableExample";
import TouchablePractice from "./components/TouchablePractice";



const App = () => {
  return (
    <View style={styles.container} >
      {/* <Logo /> */}
      {/* <User /> */}
      {/* <LotsOfGreeting/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UsernamePassword/> */}
     {/* <AlertExample/> */}
     {/* <ImageWithTextInput/> */}
     {/* <ButtonExample/> */}
     {/* <TouchableExample/> */}
     <TouchablePractice/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }



})

export default App;
