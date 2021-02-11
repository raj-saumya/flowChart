import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlowChartScreen from "./screens/FlowChartScreen";
import Store, { CTX } from "./services/Store";

const Stack = createStackNavigator();
const StackNavigator = () => {
  const { dispatch } = useContext(CTX);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeftContainerStyle: {
            paddingLeft: 16
          },
          headerLeft: () => (
            <Button
              style={{ padding: 20 }}
              title="Clear"
              onPress={() =>
                dispatch({ type: "CLEAR_NODES", payload: { depth: 0 } })
              }
            />
          ),
          headerTitle: "",
          headerRightContainerStyle: {
            paddingRight: 16
          },
          headerRight: () => (
            <Button
              style={{ padding: 20 }}
              title="Create Flow Chart"
              onPress={() => navigation.navigate("FlowChart")}
            />
          )
        })}
      ></Stack.Screen>
      <Stack.Screen name="FlowChart" component={FlowChartScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Store>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Store>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e4ef"
  }
});
