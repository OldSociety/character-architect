import React, { useState, useEffect } from 'react';

export const calculateTimeLeft = () => {
  // Set target date for next game
  let target = new Date('05/04/22 17:30');

  let difference = +target - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    // assign countdown time format
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60),
    };
  } else {
    // auto-reset add 7 days to the current date
    difference += 604799999
    // assign time format
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor(((difference / (1000 * 60 * 60)) % 24)),
      m: Math.floor(((difference / 1000 / 60) % 60)),
      s: Math.floor(((difference / 1000) % 60)),
    };
  }
  return timeLeft;
};

const Clock = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  return (
    <div>
      {timerComponents.length ? "TBD" : <p> TBD </p>} {/*Temporarily suspend countdown to next game. */}
      {/* {timerComponents.length ? timerComponents : <p> {calculateTimeLeft} </p>}  /// Reactivate countdown.*/}
    </div>
  );
};

export default Clock;
