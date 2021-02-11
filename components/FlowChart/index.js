import React, { useContext } from "react";
import Svg, { G } from "react-native-svg";
import * as d3 from "d3";
import Link from "./Link";
import Label from "./Label";
import { CTX } from "../../services/Store";

const FlowChart = ({ width, height }) => {
  const { state } = useContext(CTX);
  console.log("data", data);
  const root = d3.hierarchy(state);
  const cluster = d3.tree(root).size([height, width - 100]);
  const nodes = root.descendants();
  const links = root.links();
  console.log("nodes", nodes);
  console.log("links", links);

  var diagonal = d3
    .linkHorizontal()
    .x(function(d) {
      return d.x;
    })
    .y(function(d) {
      return d.y;
    });
  // console.log("diagonal", diagonal(links));
  cluster(root);

  return (
    <Svg height={height} width={width} viewBox={`0 0 ${width} ${height}`}>
      <G transform="translate(20,20)">
        {links.map((d, i) => (
          <Link d={d} key={i} />
        ))}
        {links.map((d, i) => (
          <Label d={d} key={i + 1} />
        ))}
      </G>
      {/* <G transform="translate(20,20)">
        {root
          .descendants()
          .slice(1)
          .map((d, i) => (
            <Link d={d} key={i} />
          ))}
        {root
          .descendants()
          .slice(1)
          .map((d, i) => (
            <Label d={d} key={i} />
          ))}
      </G> */}
    </Svg>
  );
};

export default FlowChart;

const data = {
  name: "root",
  children: [
    {
      name: "Node 1",
      children: [
        {
          name: "Node 2",
          children: [
            {
              name: "Node 3",
              children: []
            }
          ]
        },
        {
          name: "Node 4",
          children: []
        }
      ]
    },
    {
      name: "Node 1",
      children: [
        {
          name: "Node 10",
          children: []
        }
      ]
    }
  ]
};
