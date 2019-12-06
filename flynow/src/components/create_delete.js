import React from "react";
import Moment from "moment";
import axios from "axios";
import "typeface-roboto";

class create_delete extends React.Component {
  constructor() {
    super();
    this.state = {
      flightNo: 0,
      origin: "",
      destination: "",
      date_time: "",
      cost: 0.0,
      flights: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);

    axios({
      method: "post",
      url: "http://localhost:5000/database/create",
      data: this.state,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log("Error:", error);
      });
  }

  handleDelete(event) {
    event.preventDefault();

    console.log(this.state);

    axios({
      method: "post",
      url: "http://localhost:5000/database/delete",
      data: this.state,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log("Error:", error);
      });
  }

  render() {
    Moment.locale("en");
    const flights = this.state.flights;
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
          Create or Delete Flights
        </h1>
        <hr size="100px" />
        <h4 align="center">
          Fill out all the data to create a flight. Please follow the format for
          the date and time.
        </h4>
        <br />
        <form align="center">
          <label>Flight Number </label>
          <input
            type="number"
            name="flightNo"
            min="1"
            max="999"
            value={this.state.flightNo}
            onChange={e =>
              this.setState({ flightNo: parseInt(e.target.value) })
            }
            required
          />
          <label> Origin </label>
          <input
            type="text"
            name="origin"
            value={this.state.origin}
            onChange={e => this.setState({ origin: e.target.value })}
            required
          />
          <label> Destination </label>
          <input
            type="text"
            name="destination"
            value={this.state.destination}
            onChange={e => this.setState({ destination: e.target.value })}
            required
          />
          <label> Date and Time </label>
          <input
            type="text"
            name="date_time"
            value={this.state.date_time}
            placeholder="yyyy-mm-dd hh:mm:ss"
            onChange={e => this.setState({ date_time: e.target.value })}
            required
          />
          <label> Cost </label>
          <input
            type="number"
            name="cost"
            min="0.01"
            max="9999.99"
            value={this.state.cost}
            onChange={e => this.setState({ cost: parseFloat(e.target.value) })}
            required
          />
          <input
            type="submit"
            onClick={e => this.handleSubmit(e)}
            value="Create"
          />
          <br />
          <br />
          <h4>
            You can use delete button to delete the flight you have input (You
            only have to enter the flight number to delete)
          </h4>
          <br />
          <input
            type="submit"
            onClick={e => this.handleDelete(e)}
            value="Delete"
          />
        </form>
      </div>
    );
  }
}

export default create_delete;
