import { View, Text, StyleSheet, button } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-web";
import { Alert } from "react-native";
import { useState } from 'react';

export default function UsernamePassword() {
  const [userName, setUsername] = useState("");
  const [userEmail, setEmail] = useState("");
  const checkTexintput = () => {
    if (!userName.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!userEmail.trim()) {
      alert("Please E-mail");
      return;
    }
    if (userName.trim() && userEmail.trim()) {
      alert("check succes");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Name"
        value={userName}
        onChangeText={(userName) => {setUsername(userName)}} 
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Email"
        value={userEmail}
        onChangeText={(userEmail) => {setEmail(userEmail)}} 
      />
      <View style={{ marginTop: 15 }}>
        <Button title="submit" color="gray" onPress={()=> checkTexintput()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});

