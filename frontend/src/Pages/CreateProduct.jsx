import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) {
        alert('Login as Vendor to access this page');
        navigate('/');
    }
  }, []);

  const onFinish = (values) => {
    const URL = import.meta.env.VITE_BACKEND_URL;
    const productObj = {
      name: values.name, 
      description: values.description, 
      price: values.price, 
      category: values.category,
      inStock: values.inStock ? true : false,
    }
    axios
      .post(`${URL}/product/createProduct`, productObj, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        alert(res.data.message);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    <h1>Create Product</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        textAlign: 'center'
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please input the category of the product!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter the Name of the product!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input product description",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={200} />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please input Price!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="inStock" valuePropName="checked" noStyle>
        <Checkbox>Is in stock?</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default CreateProduct;
