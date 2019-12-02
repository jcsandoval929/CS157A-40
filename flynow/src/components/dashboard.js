import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "typeface-roboto";

class dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1
          align="center"
          style={{
            fontFamily: "roboto",
            fontSize: "60px",
            fontWeight: "normal",
            paddingTop: "10px"
          }}
        >
          Welcome!
        </h1>
        <hr size="100px" />
        <CardActions style={{ justifyContent: "center", paddingTop: "45px" }}>
          <Button
            style={{
              maxWidth: "250px",
              maxHeight: "60px",
              minWidth: "240px",
              minHeight: "60px",
              fontSize: "24px"
            }}
            variant="contained"
            color="primary"
            component={Link}
            to="/search/"
          >
            Search Flights
          </Button>
          <Button
            style={{
              maxWidth: "170px",
              maxHeight: "60px",
              minWidth: "170px",
              minHeight: "60px",
              fontSize: "24px"
            }}
            variant="contained"
            color="primary"
            component={Link}
            to="/records/"
          >
            Records
          </Button>
        </CardActions>
      </div>
    );
  }
}

export default dashboard;
