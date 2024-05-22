import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // const [remainingTime, setRemainingTime] = useState(TIMER);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRemainingTime((prevState) => {
  //       console.log("prevState", prevState);
  //       if (prevState <= 10) {
  //         clearInterval(interval);
  //         return 0;
  //       } else {
  //         return prevState - 10;
  //       }
  //     });
  //   }, 10);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    console.log("Timer is set!");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      console.log("Clear timeout");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* <progress className="progress-bar" value={remainingTime} max={TIMER} /> */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
