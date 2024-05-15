import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sunny-day": "linear-gradient(to bottom, #f6d365, #fda085)",
        "clear-night": "linear-gradient(to bottom, #2b5876, #4e4376)",
        "partly-cloudy-day": "linear-gradient(to bottom, #4b79a1, #e9e4f0)",
        "partly-cloudy-night": "linear-gradient(to bottom, #4e4376, #2b5876)",
        cloudy: "linear-gradient(to bottom, #bdc3c7, #2c3e50)",
        overcast: "linear-gradient(to bottom, #757f9a, #d7dde8)",
        mist: "linear-gradient(to bottom, #3a6186, #89253e)",
        rain: "linear-gradient(to bottom, #2c3e50, #bdc3c7)",
        snow: "linear-gradient(to bottom, #83a4d4, #b6fbff)",
        sleet: "linear-gradient(to bottom, #3a7bd5, #3a6073)",
        "freezing-drizzle": "linear-gradient(to bottom, #4ca1af, #c4e0e5)",
        thunderstorm: "linear-gradient(to bottom, #283048, #859398)",
        "blowing-snow": "linear-gradient(to bottom, #83a4d4, #b6fbff)",
        blizzard: "linear-gradient(to bottom, #83a4d4, #b6fbff)",
        fog: "linear-gradient(to bottom, #1e3c72, #2a5298)",
        "freezing-fog": "linear-gradient(to bottom, #4b79a1, #283e51)",
        drizzle: "linear-gradient(to bottom, #2c3e50, #bdc3c7)",
        "heavy-rain": "linear-gradient(to bottom, #232526, #414345)",
        "ice-pellets": "linear-gradient(to bottom, #000428, #004e92)",
        "torrential-rain": "linear-gradient(to bottom, #283048, #859398)",
        thunder: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
      },
    },
  },
  plugins: [],
};
export default config;
