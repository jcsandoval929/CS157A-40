import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "typeface-roboto";

class admin_dashboard extends React.Component {
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
          Welcome administrator!
        </h1>
        <hr size="100px" />
        <CardActions style={{ justifyContent: "center", paddingTop: "45px" }}>
          <Button
            style={{
              maxWidth: "270px",
              maxHeight: "60px",
              minWidth: "260px",
              minHeight: "60px",
              fontSize: "24px"
            }}
            variant="contained"
            color="primary"
            component={Link}
            to="/create_delete/"
          >
            Creation/Deletion
          </Button>
          <Button
            style={{
              maxWidth: "140px",
              maxHeight: "60px",
              minWidth: "140px",
              minHeight: "60px",
              fontSize: "24px"
            }}
            variant="contained"
            color="primary"
            component={Link}
            to="/stats/"
          >
            Stats
          </Button>
        </CardActions>
      </div>
    );
  }
}

export default admin_dashboard;
