export interface WeatherData {
  name: string; // Tên thành phố (VD: Hanoi)
  main: {
    temp: number; // Nhiệt độ hiện tại
    humidity: number; // Độ ẩm
    pressure: number; // Áp suất
  };
  weather: {
    id: number;
    main: string; // Trạng thái chính (Clouds, Rain...)
    description: string; // Mô tả chi tiết (scattered clouds...)
    icon: string; // Mã icon ảnh
  }[];
  wind: {
    speed: number; // Tốc độ gió
  };
  sys: {
    country: string; // Mã quốc gia (VN, US...)
  };
}
