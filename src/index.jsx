import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css"

const Index = () => {
  return <div className='heading'>Hello React!</div>;
};

ReactDOM.render(<Index/>, document.getElementById("index"));