import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => {
        // console.log("prevState", prevState);
        // if (prevState <= 10) {
        //   clearInterval(interval);
        //   return 0;
        // } else {
        return prevState - 10;
        // }
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress className="progress-bar" value={remainingTime} max={timer} />
  );
}
