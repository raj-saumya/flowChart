import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import NodeInput from "../components/NodeInput";
import { CTX } from "../services/Store";

const HomeScreen = () => {
  const { state } = useContext(CTX);
  return (
    <View style={styles.container}>
      <NodeInput name={state.name} depth={[]} />
      <GetNodes data={state} />
    </View>
  );
};

export default HomeScreen;

const GetNodes = ({ data, depth = [] }) => {
  return data.children.map((node, i) => (
    <View key={[...depth, i].toString()}>
      <NodeInput name={node.name} depth={[...depth, i]} />
      {node.children.length ? (
        <GetNodes data={node} depth={[...depth, i]} />
      ) : null}
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#faf9fe",
    overflow: "scroll"
  }
});

