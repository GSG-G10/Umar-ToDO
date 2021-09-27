import { useState } from "react";
import { Modal, Button, Form, Input, DatePicker } from "antd";
import "antd/dist/antd.css";

import Task from "./Task";

import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [componentSize, setComponentSize] = useState("default");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("Loading ...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Task
      </Button>
      <Modal
        title="Add Task"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Task">
            <Input />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button>Add Task</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Task />
    </>
  );
};

export default App;
