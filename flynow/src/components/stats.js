import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(bookingID, firstName, lastName, email, payment) {
  return { bookingID, firstName, lastName, email, payment };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

// const getBookings = async () => {
// try {
//   const res = await axios.get(`localhost:5000/database/bookings`);
//
//   const bookings = res.data;
//
//   console.log(`GET: Here's the list of bookings`, bookings);
//
//   return bookings;
// } catch (e) {
//   console.error(e);
// }
// };

function Stats() {
  const classes = useStyles();
  const [flights, setFlights] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/database/flights")
      .then(res => {
        setFlights(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  function Stats2() {
    const classes = useStyles();
    const [airline, setAirline] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
      axios
        .get("http://localhost:5000/database/airline")
        .then(res => {
          setAirline(res.data);
          setLoad(true);
        })
        .catch(err => {
          setError(err.message);
          setLoad(true);
        });
    }, []);
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Airline</StyledTableCell>
            <StyledTableCell align="right">Flight Number</StyledTableCell>
            <StyledTableCell align="right">Origin&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Destination&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Date and Time&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Availability&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map(airlines => (
            <StyledTableRow key={airlines.name}>
              <StyledTableCell component="th" scope="row">
                {flights.flightNo}
              </StyledTableCell>
              <StyledTableCell align="right">{flights.origin}</StyledTableCell>
              <StyledTableCell align="right">
                {flights.destination}
              </StyledTableCell>
              <StyledTableCell align="right">
                {flights.date_time}
              </StyledTableCell>
              <StyledTableCell align="right">
                {flights.maxcapacity}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Stats;
