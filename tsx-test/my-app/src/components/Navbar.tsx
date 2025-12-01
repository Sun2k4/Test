import { Layout, Button } from "antd";
const { Header } = Layout;

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Dashboard</h2>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Header>
  );
};

export default Navbar;
