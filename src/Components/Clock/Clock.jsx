import React, { useState, useEffect } from 'react'

export const calculateTimeLeft = () => {
  let target = new Date('02/22/22 17:30')

  let difference = + target - +new Date()

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

const Clock = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return <div>{timerComponents.length ? timerComponents : <p>tbd</p>}</div>
}

export default Clock;
