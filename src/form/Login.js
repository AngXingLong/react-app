import React, { Component, useState } from 'react'
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
  Rate,
  Modal
} from 'antd';

import { render } from '@testing-library/react';
import {useSelector, useDispatch} from 'react-redux';
import { valuesOfKey } from '@antv/util';
import  { Redirect } from 'react-router-dom'


function Login(){
     
  const user = useSelector (state => state.user);
  const dispatch = useDispatch();
 const [isLoggedIn, setIsLoggedIn] = useState(false);

    function onFinish(values) {

        const params = new URLSearchParams();
        params.append('username', values.username);
        params.append('password', values.password);

        axios.post("http://localhost:5000/login", params).then(response => { 
            
            if (typeof response.data !== 'string'){
                dispatch({type:"setUser", data: response.data});
                localStorage.setItem('user', JSON.stringify(response.data));
                setIsLoggedIn(true);
         
            }
            else{
              Modal.error({
                title: 'Error',
                content: (
                  <div>
                    <p>Username or password is invalid </p>
                  </div>
                ),
                onOk() {},
              });
            
            }
        });
    };

    
    function onFinishFailed(errorInfo) {
      console.log('Failed:', errorInfo);
    };

    if (isLoggedIn) {
      return <Redirect to = {{ pathname: "/" }} />;
    }

    return (
      
      <div>
      <h1>Login</h1>
      <br></br>
      


      <Form 
        layout="vertical" //vertical or horizontal
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 14 }}
        initialValues={{remember: true}}
        onFinish={onFinish}                    
        onFinishFailed={onFinishFailed}
      >

        <Form.Item
          label="User name"
          name="username"
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

export default Login;