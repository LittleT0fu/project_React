import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
} from "react-native";
import React, { useState } from "react";

const ModalPractice = () => {
  const [showModal, setShowModal] = useState(true);
  const [button, setButton] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View >
        <Modal animationType="none" transparent={false} visible={showModal}>
          <View style={styles.centeredView}>
            <View style={[styles.modalView]}>
              <Text style={styles.modalText}>ไฟเปิดอยู่เว้ยยยยยย</Text>
              <Button
                style={styles.button}
                title="กดปุ่มเพื่อปิดไฟ"
                color="#F194FF"
                onPress={() => {
                  setShowModal(!showModal);
                }}
              />
            </View>
          </View>
        </Modal>
       
       
       <View style={styles.centeredView}>
        <View style={styles.textView}>
          <Text style={styles.modalText}>ไฟปิดอยู่เว้ยยยยยย</Text>
          <Button
            style={styles.button}
            title="กดปุ่มเพื่อเปิดไฟ"
            color="#2196F3"
            onPress={() => {
              setShowModal(!showModal);
            }}
          />
        </View>
        </View>




      </View>
    </SafeAreaView>
  );
};

export default ModalPractice;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textView: {
    marginTop: 20,
    padding: 35,
    alignItems: "center",



  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
