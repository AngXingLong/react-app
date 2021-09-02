import React, { Component } from 'react'
import axios from "axios";
import { Table, Tag, Space } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class AntTable extends Component {
     
  constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = {
           columns : [
               {
                 title: 'Name',
                 dataIndex: 'name',
                 key: 'name',
                 render: text => <a>{text}</a>,
               },
               {
                 title: 'Age',
                 dataIndex: 'age',
                 key: 'age',
               },
               {
                 title: 'Address',
                 dataIndex: 'address',
                 key: 'address',
               },
               {
                 title: 'Tags',
                 key: 'tags',
                 dataIndex: 'tags',
                 render: tags => (
                   <>
                     {tags.map(tag => {
                       let color = tag.length > 5 ? 'geekblue' : 'green';
                       if (tag === 'loser') {
                         color = 'volcano';
                       }
                       return (
                         <Tag color={color} key={tag}>
                           {tag.toUpperCase()}
                         </Tag>
                       );
                     })}
                   </>
                 ),
               },
               {
                 title: 'Action',
                 key: 'action',
                 render: (text, record) => (
                   <Space size="middle">
                     <Link to="/register">Register {record.name}</Link>
                     <a>Delete</a>
                   </Space>
                 ),
               },
           ],

           data : [
               {
                 name: 'John Brown',
                 age: 32,
                 address: 'New York No. 1 Lake Park',
                 tags: ['nice', 'developer'],
               },
               {
                 name: 'Jim Green',
                 age: 42,
                 address: 'London No. 1 Lake Park',
                 tags: ['loser'],
               },
               {
                 name: 'Joe Black',
                 age: 32,
                 address: 'Sidney No. 1 Lake Park',
                 tags: ['cool', 'teacher'],
               },
             ],
       }
  
   }
   

  render() {
   return (
        <div>
          <h1>Table Example</h1>
          <Table columns={this.state.columns} dataSource={this.state.data}  pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}/>
        </div>
     )
  }
}

export default AntTable //exporting a component make it reusable and this is the beauty of react