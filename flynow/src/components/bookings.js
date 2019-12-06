import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
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


export default function Bookings() {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/database/bookings')
        .then(res => {
          setRecords(res.data);
          setLoad(true);
        })
        .catch(err => {
          setError(err.message);
          setLoad(true);
        })
}, []);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>flightNo</StyledTableCell>
            <StyledTableCell align="right">origin</StyledTableCell>
            <StyledTableCell align="right">destination&nbsp;</StyledTableCell>
            <StyledTableCell align="right">date_time&nbsp;</StyledTableCell>
            <StyledTableCell align="right">cost&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map(record => (
            <StyledTableRow key={record.flightNo}>
              <StyledTableCell component="th" scope="row">{record.flightNo}</StyledTableCell>
              <StyledTableCell align="right">{record.origin}</StyledTableCell>
              <StyledTableCell align="right">{record.destination}</StyledTableCell>
              <StyledTableCell align="right">{record.date_time}</StyledTableCell>
              <StyledTableCell align="right">{record.cost}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
