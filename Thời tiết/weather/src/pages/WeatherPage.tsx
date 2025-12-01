// src/components/weather/WeatherApp.tsx

import React, { useState, useEffect } from "react";
import { Input, Button, Card, message } from "antd";
import { SearchOutlined, CloudOutlined } from "@ant-design/icons";
import "./WeatherPage.scss";
import type { WeatherData } from "../types/weather";
import Loading from "../components/commom/Loading";
import { getWeatherByCity } from "../services/weatherService";

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName: string) => {
    setLoading(true); // Bật loading
    try {
      const data = await getWeatherByCity(cityName);

      setWeather(data);
    } catch (error) {
      console.log("error", error);

      // Xử lý lỗi nếu Service ném ra (ví dụ nhập sai tên thành phố)
      message.error("Không tìm thấy thành phố này!");
      setWeather(null);
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  };
  useEffect(() => {
    fetchWeather("Hanoi");
  }, []);

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <>
      {/* Đặt Loading ở ngoài cùng */}
      <Loading isLoading={loading} tip="Đang cập nhật thời tiết..." />

      <div className="weather-app-container">
        <Card className="weather-card" variant="borderless">
          <div className="search-box">
            <Input
              placeholder="Nhập tên thành phố..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onPressEnter={handleSearch}
              prefix={<CloudOutlined />}
              size="large"
            />
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={handleSearch}
              size="large"
            >
              Tìm
            </Button>
          </div>

          {/* Chỉ hiển thị nội dung khi có dữ liệu weather */}
          {weather ? (
            <div className="weather-info">
              <h2 className="city-name">
                {weather.name}, {weather.sys.country}
              </h2>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="icon-weather"
              />

              <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
              <p className="description">{weather.weather[0].description}</p>

              <div className="details">
                <div className="col">
                  <span>Độ ẩm</span>
                  <strong>{weather.main.humidity}%</strong>
                </div>
                <div className="col">
                  <span>Gió</span>
                  <strong>{weather.wind.speed} m/s</strong>
                </div>
                <div className="col">
                  <span>Áp suất</span>
                  <strong>{weather.main.pressure} hPa</strong>
                </div>
              </div>
            </div>
          ) : (
            // Giao diện chờ khi chưa có dữ liệu hoặc lỗi
            <div style={{ padding: 20, color: "#666" }}>
              Hãy nhập tên thành phố để xem thời tiết
            </div>
          )}
        </Card>
      </div>
    </>
  );
};

export default WeatherApp;
