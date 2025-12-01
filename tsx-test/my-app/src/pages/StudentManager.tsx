import { Card, Button, Table, Modal, Form, Input, InputNumber } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

const initialData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
  },
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAdd = () => {
    form.resetFields();
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setData((prev) => [...prev, values]);
        setVisible(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Card title="User Management">
        <Button type="primary" onClick={handleAdd}>
          <PlusOutlined /> Add User
        </Button>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="Add User"
          visible={visible}
          onCancel={handleCancel}
          onOk={handleOk}
          form={form}
        />
      </Card>
    </div>
  );
};

export default App;
