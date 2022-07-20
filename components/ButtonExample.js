import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Separator = () => <View style={styles.separator} />;

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Nap all day cat dog hate mouse eat string barf pillow no baths hate
          everything but kitty poochy. Sleep on keyboard toy mouse squeak roll
          over. Mesmerizing birds. Poop on grasses licks paws destroy couch
          intently sniff hand. The dog smells bad gnaw the corn cob.
        </Text>
        <Button title="press me" onPress={() => alert("simple Button press")} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Nap all day cat dog hate mouse eat string barf pillow no baths hate
          everything but kitty poochy. Sleep on keyboard toy mouse squeak roll
          over. Mesmerizing birds. Poop on grasses licks paws destroy couch
          intently sniff hand. The dog smells bad gnaw the corn cob.
        </Text>
        <Button
          title="press me"
          color="red"
          onPress={() => alert("simple Button press")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Nap all day cat dog hate mouse eat string barf pillow no baths hate
          everything but kitty poochy. Sleep on keyboard toy mouse squeak roll
          over. Mesmerizing birds. Poop on grasses licks paws destroy couch
          intently sniff hand. The dog smells bad gnaw the corn cob.
        </Text>
        <Button title="press me" color="green" disabled />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Nap all day cat dog hate mouse eat string barf pillow no baths hate
          everything but kitty poochy. Sleep on keyboard toy mouse squeak roll
          over. Mesmerizing birds. Poop on grasses licks paws destroy couch
          intently sniff hand. The dog smells bad gnaw the corn cob.
        </Text>
        <View style={styles.fixToText}>
          <View >
            <Button
              title="press me"
              color="green"
              onPress={() => alert("simple Button press")}
            />
          </View>
          <View>
            <Button
              title="press me"
              color="green"
              onPress={() => alert("simple Button press")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
