import { StyleSheet, Text, View, TextInput,Button ,Alert} from 'react-native'
import React, { useState } from 'react'

const UserNameandPassword = () => {
    const [userName,setUsername] = useState('');
    const [passWord,setPassword] = useState('');
  return (
    <View>
      <TextInput
        style={styles.textinput}
        placeholder='Email'
        value={userName}
        onChangeText={(userName) => {setUsername(userName)}} 
      />
      <TextInput
        style={styles.textinput}
        placeholder='password'
        value={passWord}
        onChangeText={(passWord) => {setPassword(passWord)}} 
      />
      <Button
        style={styles.button}
        title='Submit'
        color="green"
        onPress={()=>alert("username is " + userName + "\npassword is "+ passWord)}
      />
      <Text></Text>
    </View>
  )
}

export default UserNameandPassword

const styles = StyleSheet.create({
    textinput :{
      width:250,
      height:45,
      padding:10,
      marginTop:20,
      marginBottom:10,
      borderColor:"green",
      borderWidth:1
    },
    button:{
        marginTop:20,
    }
  })