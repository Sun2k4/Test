import type { WeatherData } from "../types/weather";

const API_KEY = "ee7bb6a86af3994eed54d1ec25246432";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Hàm gọi API lấy thời tiết
export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    // Ném lỗi ra để bên Component bắt được (catch)
    throw new Error("City not found or API error");
  }

  const data: WeatherData = await response.json();
  return data;
};
