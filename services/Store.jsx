import React, { createContext, useReducer } from "react";

const initialState = {
  name: "root",
  children: []
};

export const CTX = createContext();

const reducer = (state, action) => {
  const tempTree = JSON.parse(JSON.stringify(state));
  const { depth } = action.payload;
  let tempNode;
  switch (action.type) {
    case "INSERT_NODE":
      tempNode = depth.reduce((a, b) => {
        return a.children[b];
      }, tempTree);
      tempNode.children.push({
        name: "New Node",
        children: []
      });
      return tempTree;
    case "DELETE_NODE":
      const last = depth.length - 1;
      tempNode = depth.slice(0, last).reduce((a, b) => {
        return a.children[b];
      }, tempTree);
      tempNode.children.splice(depth[last], 1);
      return tempTree;
    case "EDIT_NODE":
      tempNode = depth.reduce((a, b) => {
        return a.children[b];
      }, tempTree);
      tempNode.name = action.payload.value;
      return tempTree;
    case "CLEAR_NODES":
      return initialState;
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CTX.Provider value={{ state, dispatch }}>{children}</CTX.Provider>;
};

export default Store;
