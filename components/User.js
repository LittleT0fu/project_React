import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const User = () => {
    const users = [
        {id:1,name:"BugJohn"},
        {id:2,name:"Mary"}
    ];
  return (
    <View>
      <Text></Text>
      {
        users.map((user,index)=>{
            return <Text style={style.textColor}  key={user.id}>{index+1}. {user.name} </Text>
        })
      }
    </View>
  )
}

const style = StyleSheet.create({
    textColor : {
        color:'red'
    }

})

export default User