import React from "react";
import {
  Path
} from "react-native-svg";

const Link = ({
    d
  }) => {
    // return ( < Path fill = "none"
    //   stroke = "#000"
    //   d = {
    //     "M" + d.source.x + "," + d.source.y +
    //     "H" + d.target.x + "V" + d.target.y
    //   }
    //   / >)
      return ( <
        Path fill = "none"
        stroke = "#000"
        d = {
          "M" +
          d.source.y +
          "," +
          d.source.x +
          "C" +
          (d.target.y + 0) +
          "," +
          d.source.x +
          " " +
          (d.target.y - 100) +
          "," +
          d.target.x +
          " " +
          d.target.y +
          "," +
          d.target.x
        }
        />
      );
    };

    export default Link;