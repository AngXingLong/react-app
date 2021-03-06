
import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import AntTable  from './table/AntTable';
import AntForm from './form/AntForm';
import AntColumnChart from './chart/AntColumnChart';
import AntLineChart from './chart/AntLineChart';
import ApexVerticalBar from './chart/ApexVerticalBar';
import "antd/dist/antd.css";
//import "./styles/css/antd.css";
import {Button, Nav, Navbar, NavDropdown, Dropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoute';
import ProtectedRouteTest from './ProtectedRouteTest';
import Login from './form/Login';
import axios from 'axios';
import {createStore} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import { Modal } from 'antd';
import HomePage from './homepage';
function App() {

  axios.defaults.withCredentials = true;

  const user = useSelector (state => state.user);
  const dispatch = useDispatch();

  function logout(){                
    axios.post(`http://localhost:5000/logout`).then(response => {
      dispatch({type: "setUserLogout", data:{}}); 
      localStorage.removeItem("user");
    });
  }

  useEffect(() => {
    let userStorage = JSON.parse(localStorage.getItem('user'));
    
    if(userStorage){  
      dispatch({type: "setUserLogout", data:userStorage}); 
    }
  },[]);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} width="100" height="50" />
            React Ant Design
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/table">Table</Link></Nav.Link>
            <Nav.Link><Link to="/register">Forms</Link></Nav.Link>
            <NavDropdown title="Ant Charts" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/AntLineChart">Line</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/AntColumnChart">Column With Ajax</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Apex Charts" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/ApexVerticalBar">VerticalBar</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/ProtectedRouteTest">Protected Route</Link></Nav.Link>
          </Nav>
       
            { user.isAuth ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Welcome {user.username}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/Login"><Button variant="outline-success">Login</Button></Link>
            )}            
                              
        </Navbar.Collapse>
      </Navbar>

        <div className="wrapper" fluid>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/register">
            <AntForm />
          </Route>
          <Route path="/table">
            <AntTable/>
          </Route>
          <Route path="/ApexVerticalBar">
            <ApexVerticalBar />1
          </Route>
          <Route path="/AntLineChart">
            <AntLineChart/>
          </Route>
          <Route path="/AntColumnChart">
            <AntColumnChart/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <ProtectedRoute path="/ProtectedRouteTest" component={ProtectedRouteTest} isAuth={user.isAuth}/>
        </Switch>
        </div>
    </Router>
    
  );

  
}

export default App;
