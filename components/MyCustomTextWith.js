import { View, Text , StyleSheet } from 'react-native'
import React from 'react'


const Text_Output = ({fname,lname}) =>{
    return(
        <View >
          <Text style={{color:'green'}}>Your First Name is {fname}! and Last Name is {lname} </Text>
        </View>
    )

}

const MyCustomTextWith = () => {
  return (
    <View>
      <Text_Output fname='Kraiwit' lname='chinchanathavorn'/>
      <Text_Output fname='Chonlasit' lname='Maneegobkul'/>
    </View>
  )
}

const style = StyleSheet.create({

})

export default MyCustomTextWith