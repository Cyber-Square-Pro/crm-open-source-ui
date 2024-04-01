import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Timer({
  seconds,
  afterTimeFinish,
}: {
  seconds: number;
  afterTimeFinish: () => void;
}) {
  const [timer, setTimer] = useState("00:00");

  let constTimer: any = null;

  useEffect(() => {
    startTimer(seconds);
    return () => {
      setTimer("00:00");
      clearInterval(constTimer);
    };
  }, []);

  function startTimer(duration: number) {
    let timer: number = duration,
      minutes,
      seconds;

    constTimer = setInterval(() => {
      // @ts-ignore
      minutes = parseInt(timer / 60, 10);
      // @ts-ignore
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTimer(minutes + ":" + seconds);

      if (--timer < 0) {
        clearInterval(constTimer);
        setTimer("");
        afterTimeFinish();
        timer = duration;
      }
    }, 1000);
  }

  return (
    <div className="flex gap-2 items-center text-base">
        <span className="text-red">{timer}</span>
    </div>
  );
}

Timer.defaultProps = {
  seconds: Date.now() + 10000,
  afterTimeFinish: () => {},
};
