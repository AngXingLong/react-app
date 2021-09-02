import React, { Component } from 'react'
import axios from "axios";
import { Table, Tag, Space } from 'antd';
import {
  Form,
  Input,
  Button,
  Radio,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Alert,
  Checkbox,
  Select
} from 'antd';

import { render } from '@testing-library/react';
const { Option } = Select;
class AntForm extends Component {
     
  constructor(props) {
       super(props) 
       this.state = {
        visible: false,
        value: ''
      };
  
   }

   onFinish = (values) => {
    console.log('Success:', values);
  
    axios.post("http://localhost:5000/user", values
    ).then(response => { 
        console.log(response.data);

        this.setState({popup: <Alert  
          message="Register Success"
          type="success"
          showIcon
          closable
        />})
    });
    
  };

  
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {

    
    return (
      <div>
      <h1>Register</h1>
      <br></br>
      {this.state.popup}
      <Form 
      
        name="basic"
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}                    
        onFinishFailed={this.onFinishFailed}
      >

        <Form.Item
          name="userType"
          label="User Type"
          >
          <Select defaultValue="admin" >
          <Option value="admin">Admin</Option>
          <Option value="vistor">Vistor</Option>
          <Option value="disabled" disabled>                                  
            Disabled
          </Option>
        </Select>
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>                                                          
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default AntForm;