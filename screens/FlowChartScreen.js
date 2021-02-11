import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import FlowChart from "../components/FlowChart";

export default function FlowChartScreen() {
  const viewWidth = Dimensions.get("window").width;
  const viewHeight = Dimensions.get("window").height - 64;

  return (
    <View style={styles.container}>
      <FlowChart width={viewWidth} height={viewHeight}></FlowChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f9fd"
  }
});
