import { StyleSheet, Text, View, Alert, Button } from "react-native";
import React from "react";

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert("Hello I am simple alert from java script");
  };
  const twoopAlertHandler = () => 
    // use alert from react native
    Alert.alert(
      //title
      "Heading",
      //body
      "Body",
      [
        {
          text: "Yes",
          onPress: () => console.log('Yes'),
        },
        {
            text: "No",
            onPress: () => console.log('Yes'),
            style: 'cancel'
        },
      ],
      {cancelable:false}
    );

  return (
    <View style={styles.container}>
      <Text>AlertExample</Text>
      <Button title="simple alert" onPress={simpleAlertHandler} />
      <Button title="Alert w/ 2 op" onPress={twoopAlertHandler} />
    </View>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
