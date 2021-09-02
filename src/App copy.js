import logo from './logo.svg';
import './App.css';

//import NativeTable  from './NativeTable';
import AntTable  from './table/AntTable';
import AntForm from './form/AntForm';
import AntColumnChart from './chart/AntColumnChart';
import AntLineChart from './chart/AntLineChart';
import VerticalBar from './chart/VerticalBar';
import "antd/dist/antd.css";

import {Button, Nav, Navbar, NavDropdown, FormControl, Form, Container, Row, Table} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img src={logo} width="100" height="50" />
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Table</Link></Nav.Link>
            <Nav.Link><Link to="/register">Forms</Link></Nav.Link>
            <NavDropdown title="Ant Charts" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/VerticalBar">VerticalBar</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/AntLineChart">Line</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/AntColumnChart">Column</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

        <div className="wrapper" fluid>
        <Switch>
          <Route exact path="/">
            <AntTable/>
          </Route>
          <Route path="/register">
            <AntForm />
          </Route>
          <Route path="/VerticalBar">
            <VerticalBar />
          </Route>
          <Route path="/AntLineChart">
            <AntLineChart/>
          </Route>
          <Route path="/AntColumnChart">
            <AntColumnChart/>
          </Route>
        </Switch>
        </div>
    </Router>
    
  );
}




export default App;
