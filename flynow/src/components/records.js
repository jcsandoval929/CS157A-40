import React from "react";
import Button from "@material-ui/core/Button";
import "typeface-roboto";

class records extends React.Component {
  render() {
    return (
      <div>
        <h1
          align="center"
          style={{
            fontFamily: "roboto",
            fontSize: "48px",
            fontWeight: "normal",
            paddingTop: "10px"
          }}
        >
          Records
        </h1>
        <hr size="100px" />
      </div>
    );
  }
}

export default records;
