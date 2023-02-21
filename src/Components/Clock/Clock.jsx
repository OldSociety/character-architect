import React, { useState, useEffect } from "react";

const SECONDS_IN_WEEK = 604800;

function Countdown() {
  const startTime = new Date("02/15/2023 17:45").getTime();
  const [remainingTime, setRemainingTime] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - startTime;
      const remaining = SECONDS_IN_WEEK - (timeDiff / 1000) % SECONDS_IN_WEEK;
      setRemainingTime(remaining);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = Math.floor(remainingTime % 60);

  return (
    <div>
      <div>{days}d {hours}h {minutes}m {seconds}s</div>
    </div>
  );
}

export default Countdown;
