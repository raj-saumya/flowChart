import React, { useContext } from "react";
import { StyleSheet, TextInput } from "react-native";
import { CTX } from "../services/Store";

const Input = ({ placeholder, value, depth }) => {
  const { dispatch } = useContext(CTX);
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={value}
      onChangeText={value =>
        dispatch({
          type: "EDIT_NODE",
          payload: { depth, value }
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    borderWidth: 0,
    backgroundColor: "#fff",
    shadowColor: "#e3e4ef",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
    borderRadius: 8,
    padding: 12
  }
});

export default Input;
