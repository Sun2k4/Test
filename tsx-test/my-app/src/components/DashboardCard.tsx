import { Layout, Row, Col, Card } from "antd";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const Dashboard = () => {
  const username = localStorage.getItem("username") || "User";

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content style={{ margin: "16px" }}>
          <h2>Chào mừng {username} đến với Dashboard!</h2>

          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            <Col span={8}>
              <Card title="Users" variant="borderless">
                150
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Orders" variant="borderless">
                75
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Revenue" variant="borderless">
                $12,300
              </Card>
            </Col>
          </Row>

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
