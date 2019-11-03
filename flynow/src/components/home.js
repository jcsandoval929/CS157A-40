import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import "typeface-roboto";

const headerStyle = {
    color: "#072F5F",
    fontSize: "100px",
    fontWeight: "normal",
    fontFamily: "roboto"
};
const buttonStyle = {
    //marginTop: "10px",
    fontSize: "20px",
    padding: "20px",
    fontWeight: "normal",
};

class home extends React.Component {
    render() {

        return (
            <div>
                <h1 align="center" style={headerStyle}>
                    FlyNow
                    </h1>
                <Paper>

                </Paper>
                <CardActions style={{ justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/login/"
                        style={buttonStyle}
                    >
                        Login/Register
                    </Button>
                </CardActions>
            </div >
        );
    }
}

export default home;
