import React from "react";
import { CountdownContainer } from "./countdown.styles";

export default function Countdown({ countdown }) {
  return (
    <CountdownContainer>
      <span>{`${countdown / 60 >= 1 ? Math.floor(countdown / 60) + "min" : ""}${
        countdown % 60
      }s`}</span>
    </CountdownContainer>
  );
}
