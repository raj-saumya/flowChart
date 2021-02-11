import React from "react";
import { View, Text } from "react-native";
import Svg, { G, ForeignObject } from "react-native-svg";

const Label = ({ d }) => {
  return (
    <G transform={`translate(${d.target.y},${d.target.x})`}>
      <ForeignObject
        x={-(10 * d.target.data.name.length) / 2}
        y={0}
        width={10 * d.target.data.name.length}
        height={32}
        transform="rotate(-90)"
      >
        <View
          style={{
            borderRadius: 6,
            width: 10 * d.target.data.name.length,
            height: 28,
            backgroundColor: "black",
            shadowColor: "lightgrey",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 16,
            elevation: 4
          }}
        >
          <Text style={{ color: "white", padding: 6 }}>
            {d.target.data.name}
          </Text>
        </View>
      </ForeignObject>
    </G>
  );
};
export default Label;
