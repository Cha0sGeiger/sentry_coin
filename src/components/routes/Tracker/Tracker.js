import React, { useState, useEffect, Component } from "react";
import { getCryptoPrice } from "../../../services/apiCoins";
import classes from "./Tracker.module.scss";

class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [],
    };
  }

  componentDidMount() {
    console.log("drugo");
    getCryptoPrice().then((data) => {
      console.log(data.BTC.EUR, "data");
      this.setState({
        crypto: data,
      });
    });
    if (!localStorage.getItem("crypto")) {
      // skini nove podatke
    } else {
      console.log("Using data");
    }
  }

  render() {
    return (
      <div className={classes.page}>
        {Object.keys(this.state.crypto).map((key) => (
          <div className={classes.coin_container} key={key}>
            <div className={classes.id_wrapper}>
              <div>{key}</div>
              <div>{this.state.crypto[key].EUR}$</div>
            </div>
            <div className={classes.button_wrapper}>
              <button className={classes.button}>Add</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Tracker;
