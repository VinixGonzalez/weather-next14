import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const apiKey = process.env.WEATHER_API_KEY;

  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

  if (lat && lon) {
    apiUrl += `${lat},${lon}`;
  } else if (city) {
    apiUrl += city;
  } else {
    apiUrl += "London";
  }

  const res = await fetch(apiUrl);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather data, try again later." },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}
