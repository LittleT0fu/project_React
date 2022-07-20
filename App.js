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

const App = () => {
  return (
    <View >
      {/* <Logo /> */}
      {/* <User /> */}
      {/* <LotsOfGreeting/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      <UsernamePassword/>
     
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
