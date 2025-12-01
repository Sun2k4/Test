import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    const { username, password } = values;
    const testUser = { username: "admin", password: "123456" };

    if (username === testUser.username && password === testUser.password) {
      localStorage.setItem("token", "dummy_token");
      localStorage.setItem("username", username);
      window.location.href = "/dashboard";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: 400,
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Đăng nhập
        </Title>
        <Form name="loginForm" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Nhập username" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập password"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Đăng nhập
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
