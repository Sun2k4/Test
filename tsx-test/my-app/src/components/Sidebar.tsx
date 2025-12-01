import { Menu } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div style={{ width: 200, height: "100vh", backgroundColor: "#001529" }}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={[
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          {
            key: "/dashboard/profile",
            icon: <UserOutlined />,
            label: <Link to="/dashboard/profile">Profile</Link>,
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
