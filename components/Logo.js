import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = false;
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text> 

      {/* {
        isTH && <Text>เงอะๆงะๆ</Text>
      } */}
      {/* Use if/else or conditional operatir */}

    {
        isTH ? (<Text>วอเอ๊ะๆๆๆ</Text>) : (<Text>เงอะๆๆๆๆๆๆ</Text>)
    }


    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{ 
        color:"blue",
        fontSize:40,
    }

})