"use client";

import React from "react";
import Image from "next/image";

import { WeatherResponseData } from "../../../types";

export const Weather = ({ current, location }: WeatherResponseData) => {
  const { tz_id } = location;

  const userLocalTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const options: Intl.DateTimeFormatOptions = {
    timeZone: tz_id,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const locationTime = formatter.format(new Date());
  return (
    <div
      className={`${
        current.is_day ? "text-black" : "text-white"
      } flex flex-col gap-8 items-center justify-center bg-[#ffffff50] p-4 rounded-lg shadow-lg w-full sm:w-96`}
    >
      <div className="flex flex-col w-full">
        <h1 className="text-2xl text-center">Weather in {location.name}</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col items-start">
            <p className="text-xs">{location.name}</p>
            <span className="text-base">{locationTime}</span>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs">Local</p>
            <span className="text-base">{userLocalTime}</span>
          </div>
        </div>
      </div>
      <hr className="w-2/3 border-[#29292930]" />

      <div className="flex flex-col gap-4">
        <p>Temperature: {current.temp_c}°C</p>
        <div className="flex flex-col items-center">
          <Image
            src={`https:${current.condition.icon}`}
            alt="icon"
            width={64}
            height={64}
          />
          <p className="text-sm">{current.condition.text}</p>
        </div>
      </div>

      <hr className="w-2/3 border-[#29292930]" />
    </div>
  );
};
