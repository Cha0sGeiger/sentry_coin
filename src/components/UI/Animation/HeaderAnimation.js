// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../../media/animation/23608-mobile-seo.json";
import classes from "./HeaderAnimation.module.scss";

class HeaderAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={250} width={250} />
        <h2 className={classes.animation_text}>
          Connecting your personal data with every service
        </h2>
      </div>
    );
  }
}

export default HeaderAnimation;
