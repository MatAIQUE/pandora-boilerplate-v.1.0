"use client";
import React, { useState, useEffect } from "react";

const Time = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [ampm, setAmPm] = useState("");

  const updateTime = () => {
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes().toString().padStart(2, "0");
    const currentAmPm = currentHours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    currentHours = currentHours % 12 || 12;

    setHours(currentHours.toString().padStart(2, "0"));
    setMinutes(currentMinutes);
    setAmPm(currentAmPm);
  };

  useEffect(() => {
    updateTime(); // Call it once to set the initial time

    // Update time every minute (60000 milliseconds)
    const intervalId = setInterval(updateTime, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      <div className="text-white font-medium mb-3 flex items-top justify-center">
        <span className="text-7xl">
          {hours}:{minutes}
        </span>
        <span className="text-1xl ml-4 flex flex-col">
          <span>{ampm}</span>
        </span>
      </div>
    </>
  );
};

export default Time;
