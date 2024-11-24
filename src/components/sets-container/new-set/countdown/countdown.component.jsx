import React, { useEffect, useState } from "react";
import {
  AddSecondsSpan,
  CountdownContainer,
  CountDownSpan,
  RemoveSecondsSpan,
} from "./countdown.styles";

const Countdown = ({ countdown }) => {
  const [timer, setTimer] = useState(countdown);

  useEffect(() => {
    let intervalId;
    timer < 0 && setTimer(0);
    if (timer !== 0)
      intervalId = setInterval(() => {
        setTimer((previousState) => previousState - 1);
      }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <CountdownContainer>
      <CountDownSpan>
        <AddSecondsSpan
          onClick={() => setTimer((previousState) => previousState + 15)}
        >
          +15s
        </AddSecondsSpan>
        {`${timer / 60 >= 1 ? Math.floor(timer / 60) + "min" : ""}${
          timer % 60
        }s`}
        <RemoveSecondsSpan
          onClick={() => setTimer((previousState) => previousState - 15)}
        >
          -15s
        </RemoveSecondsSpan>
      </CountDownSpan>
    </CountdownContainer>
  );
};

export default Countdown;
