import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Rất tiếc, trang bạn tìm kiếm không tồn tại!"
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Quay về trang xem thời tiết
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
