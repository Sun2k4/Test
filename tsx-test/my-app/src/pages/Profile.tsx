const Profile = () => {
  const username = localStorage.getItem("tanh") || "User";
  return (
    <div style={{ marginTop: 20 }}>Đây là trang Profile của {username}</div>
  );
};

export default Profile;
