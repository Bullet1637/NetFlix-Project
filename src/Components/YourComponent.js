import React from "react";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "250px",
  width: "100%",
  backgroundColor: "#00008b",
  color: "#fff",
  margin: "0 15px",
  fontSize: "4em",
};

function YourComponent() {
  return <div style={divStyle}>Your content here</div>;
}

export default YourComponent;
