import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'

const AlertExample = () => {
  return (
    <View>
      <Text>AlertExample</Text>
      
    </View>
  )
}

export default AlertExample

const styles = StyleSheet.create({})


Alert.alert(
    'Heading',
    'Body',
    [{
        text: 'option1',
        onPress: () => handler,
    }]

)