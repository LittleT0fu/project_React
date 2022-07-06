import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name,date}) => {
    return(
        <View>
            <Text>Hello {name}    {date}!</Text>
        </View>
    )
}




const LotsOfGreeting = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
      <Greeting name='Marry Christmas' date='25-dec-2020'/>
      <Greeting name='Happy New Year' date='31-dec-2020'/>
      <Greeting name='Songkran Festival' date ='13-Apr-2020'/>
    </View>
  )
}

export default LotsOfGreeting


