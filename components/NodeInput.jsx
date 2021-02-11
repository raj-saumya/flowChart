import React, { useContext } from "react";
import { StyleSheet, View, Pressable, Image } from "react-native";
import Input from "./Input";
import { CTX } from "../services/Store";

const NodeInput = ({ name, depth }) => {
  const { dispatch } = useContext(CTX);
  const styles = getStyles(depth);
  return (
    <View style={styles.container}>
      <View style={styles.hRule} />
      <Input placeholder="Enter Node" value={name} depth={depth} />
      <Pressable
        onPress={e =>
          dispatch({
            type: "INSERT_NODE",
            payload: {
              depth
            }
          })
        }
      >
        <Image
          style={styles.icons}
          source={require("../assets/icon-add.png")}
        />
      </Pressable>
      <Pressable
        onPress={e =>
          dispatch({
            type: "DELETE_NODE",
            payload: {
              depth
            }
          })
        }
      >
        <Image
          style={styles.icons}
          source={require("../assets/icon-delete.png")}
        />
      </Pressable>
    </View>
  );
};

const getStyles = depth => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      paddingLeft: 24 * depth.length
    },
    hRule: {
      height: 10,
      width: 10,
      backgroundColor: "#4c4c4c",
      borderRadius: 50,
      marginRight: 16
    },
    button: {
      width: "fit-content"
    },
    icons: {
      height: 24,
      width: 24,
      marginLeft: 16
    }
  });

  return styles;
};

export default NodeInput;
