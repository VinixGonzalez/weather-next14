"use client";

import React from "react";
import { CityForm } from "./CityForm";
import { Weather } from "./Weather";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { WeatherResponseData } from "../../../types";
import { conditionToGradient } from "../utils/gradients";

export const WeatherContent = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const url = `/api/weather?${
    lat && lon ? `lat=${lat}&lon=${lon}` : `city=${city || "London"}`
  }`;

  const fetchWeather = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`http error! status: ${res.status}`);
    }

    return res.json();
  };

  const { data, status, error, isLoading } = useQuery<WeatherResponseData>({
    queryKey: ["weather", url],
    queryFn: () => fetchWeather(url),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available.</p>;

  const conditionCode = data.current.condition.code;
  const gradientClass = conditionToGradient[conditionCode] || "bg-clear";

  return (
    <div
      className={`flex items-center justify-center flex-col h-screen p-4 gap-8 ${
        data.current.is_day ? gradientClass.day : gradientClass.night
      }`}
    >
      <CityForm />
      <Weather current={data.current} location={data.location} />
    </div>
  );
};
