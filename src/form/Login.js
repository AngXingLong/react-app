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
  Select,
  Rate
} from 'antd';

import { render } from '@testing-library/react';
const { Option } = Select;
class Login extends Component {
     
  constructor(props) {
       super(props) 
       this.state = {
        visible: false,
        value: ''
      };
  
   }

   onFinish = (values) => {
    console.log('Success:', values);
  
    axios.post("http://localhost:8080/user", values
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
      <h1>Login</h1>
      <br></br>

      {this.state.popup}

      <Form 
        layout="vertical" //vertical or horizontal
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 14 }}
        initialValues={{remember: true}}
        onFinish={this.onFinish}                    
        onFinishFailed={this.onFinishFailed}
      >

        <Form.Item
          label="User name"
          name="text"
          rules={[
            {
              required: true,
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
              message: 'Your required message goes here',
            },
          ]}
        >
          <Input.Password  />
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

export default Login;