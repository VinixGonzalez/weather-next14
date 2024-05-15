"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const CityForm = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?city=${city}`);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        name="city"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        required
        className="rounded p-2 w-full"
      />
      <button className="bg-[#282828] text-white rounded p-2" type="submit">
        Get Weather
      </button>
    </form>
  );
};
