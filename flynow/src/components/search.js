import React from "react";
import Moment from "moment";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "typeface-roboto";

class search extends React.Component {
  constructor() {
    super();
    this.state = {
      flightNo: 0,
      origin: "",
      destination: "",
      flights: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleSubmit(event) {
    let self = this;
    event.preventDefault();

    console.log(this.state);

    axios({
      method: "post",
      url: "http://localhost:5000/database/search",
      data: this.state,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        // handle success
        console.log(response);
        if (response.data.code !== 204) {
          self.setState({ flights: response.data });
        } else {
          self.setState({ flights: undefined });
        }
      })
      .catch(error => {
        // handle error
        console.log("Error:", error);
      });
  }

  handleChoose(flightKey) {
    let self = this;

    self.setState({ flightNo: flightKey });
  }

  handleClick(event) {
    event.preventDefault();

    console.log(this.state);

    axios({
      method: "post",
      url: "http://localhost:5000/database/book",
      data: this.state,
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
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

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     var self = this;
  //     console.log(this.state);
  //     fetch("http://localhost:5000/database/search", {
  //       method: "POST",
  //       data: {
  //         origin: self.refs.origin,
  //         destination: self.refs.destination
  //       }
  //     })
  //       .then(function(response) {
  //         if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //         }
  //         return response.json();
  //       })
  //       .then(function(data) {
  //         console.log(data);
  //         if (data == "success") {
  //           this.setState({ msg: "Thanks for searching" });
  //         }
  //       })
  //       .catch(function(err) {
  //         console.log(err);
  //       });
  //   }

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
          Search
        </h1>
        <hr size="100px" />
        <form align="center">
          <label>Origin </label>
          <input
            type="text"
            name="origin"
            value={this.state.origin}
            onChange={e => this.setState({ origin: e.target.value })}
          />

          <label> Destination </label>
          <input
            type="text"
            name="destination"
            value={this.state.destination}
            onChange={e => this.setState({ destination: e.target.value })}
          />
          <input
            type="submit"
            onClick={e => this.handleSubmit(e)}
            value="Search"
          />
        </form>
        {typeof flights !== "undefined" ? (
          <div>
            <ul>
              {this.state.flights.map(flight => (
                <li key={flight.flightNo}>
                  <h2>
                    {flight.origin} to {flight.destination}
                  </h2>
                  <p>{Moment(flight.date_time).format("LLLL")}</p>
                  <p>Flight Number: {flight.flightNo}</p>
                  <p>Cost: ${flight.cost}</p>
                  <button
                    type="button"
                    onClick={() => this.handleChoose(flight.flightNo)}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
            <div align="center">
              <button type="button" onClick={e => this.handleClick(e)}>
                Book
              </button>
            </div>
          </div>
        ) : (
          <h1
            align="center"
            style={{
              fontFamily: "roboto",
              fontSize: "24px",
              fontWeight: "normal",
              paddingTop: "10px"
            }}
          >
            No flights found
          </h1>
        )}
      </div>
    );
  }
}

export default search;
