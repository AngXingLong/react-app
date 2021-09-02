import React, { Component } from 'react'
import axios from "axios";
import { Table, Tag, Space } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col,Alert, Affix} from 'antd';
import { render } from '@testing-library/react';

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
          message="Success Tips"
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
  
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
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