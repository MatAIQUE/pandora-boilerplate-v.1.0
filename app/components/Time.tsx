"use client";
import React, { useState, useEffect } from "react";
import CardTitle from "./CardTitle";

const Time = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [ampm, setAmPm] = useState("");
  const [greeting, setGreeting] = useState("");

  const updateTime = () => {
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes().toString().padStart(2, "0");
    const currentAmPm = currentHours >= 12 ? "PM" : "AM";

    setAmPm(currentAmPm);
    setMinutes(currentMinutes);

    // Set greeting based on the time of the day
    if (currentHours >= 0 && currentHours < 12) {
      setGreeting("Good Morning!");
    } else if (currentHours >= 12 && currentHours < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }

    // Convert hours to 12-hour format
    currentHours = currentHours % 12 || 12;

    setHours(currentHours.toString().padStart(2, "0"));
  };

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="text-white font-medium mb-5 flex justify-start">
        <span className="text-3xl mb-5">{greeting}</span>
      </div>

      <div className="text-white font-medium mt-5 py-2 flex items-top justify-center">
        <span className="text-7xl mr-2 bg-accent px-5 rounded-box">
          {hours}:{minutes}
        </span>
        <span className="text-1xl flex flex-col">
          <span>{ampm}</span>
        </span>
      </div>
    </>
  );
};

export default Time;
