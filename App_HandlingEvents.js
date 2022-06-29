import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const App = () => {
  
  const alertMessage = () => {
    alert("Hello")

  }
  
  return (
    <View style={Styles.container}>
      <Text>Button Exmaple</Text>
      <Button
        title='CLICK ME'
        color='purple'
        onPress={alertMessage}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});

export default App
