import './index.css';
import React from "react";
import ReactDOM from "react-dom";


// let element = React.createElement("h1", null, "React element");
let counterDisplayElement = React.createElement("h1","null",0);
let incrementButtonElement = React.createElement("button","null","+");
let decrementButtonElement = React.createElement("button","null","-");
let containerDivElement = React.createElement("div","null",[counterDisplayElement,incrementButtonElement,decrementButtonElement]);

ReactDOM.render(containerDivElement, document.querySelector("#root"));
