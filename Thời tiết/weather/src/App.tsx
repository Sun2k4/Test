import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import NotFound from "../src/pages/NotFound"; // Import trang 404

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ hiển thị App Thời Tiết */}
        <Route path="/" element={<WeatherPage />} />

        {/* Trang 404 bắt tất cả các link sai */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
