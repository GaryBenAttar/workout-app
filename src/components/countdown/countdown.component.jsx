import React from "react";
import { CountdownContainer, CountDownSpan } from "./countdown.styles";

const Countdown = ({ countdown }) => {
  return (
    <CountdownContainer>
      <CountDownSpan>{`${
        countdown / 60 >= 1 ? Math.floor(countdown / 60) + "min" : ""
      }${countdown % 60}s`}</CountDownSpan>
    </CountdownContainer>
  );
};

export default Countdown;
