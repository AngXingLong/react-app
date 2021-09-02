import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AntTable  from './table/AntTable';
import AntForm from './form/AntForm';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>

        <Header style={{backgroundColor: "white", borderBottom: "1px solid #eee"}}>
            <div className="logo"><img src={logo} width="100" height="50" /> React-Bootstrap </div>
            <Menu mode="horizontal" theme="light" style={{float: "right !important"}}>
               
               
                <Menu.Item style={{float: "right"}}>Tables</Menu.Item>
                <Menu.Item style={{float: "right"}}>Forms</Menu.Item>

            </Menu>
        </Header>

        <div className="wrapper" fluid>
        <Switch>
          <Route exact path="/">
            <AntTable/>
          </Route>
          <Route path="/register">
            <AntForm />
          </Route>
        </Switch>
        </div>
    </Router>
    
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



export default App;
