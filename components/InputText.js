import { View, Text , Alert ,TextInput , Button ,StyleSheet} from 'react-native'
import React,{useState} from 'react'

const InputText = () => {

  const [userName,setUsername]=useState('');

  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert any text in below input</Text>
      <TextInput
      style={styles.textinput}
        value={userName}
        placeholder='Please input username'
        onChangeText={(userName)=> {setUsername(userName)}}
      />
      <Text>{userName}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  textinput :{
    width:250,
    height:45,
    padding:10,
    marginTop:20,
    marginBottom:10
  }


})