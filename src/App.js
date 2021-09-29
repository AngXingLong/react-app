
import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

//import NativeTable  from './NativeTable';
import AntTable  from './table/AntTable';
import AntForm from './form/AntForm';
import AntColumnChart from './chart/AntColumnChart';
import AntLineChart from './chart/AntLineChart';
import ApexVerticalBar from './chart/ApexVerticalBar';
import "antd/dist/antd.css";
//import "./styles/css/antd.css";
import {Button, Nav, Navbar, NavDropdown, FormControl, Form, Container, Row, Table} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Authtest from './Authtest';
import Login from './form/Login';
import axios from 'axios';
import {createStore} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import { Modal } from 'antd';

function App() {

  axios.defaults.withCredentials = true;
  const [isAuth, setIsAuth] = useState(false);
  const user = useSelector (state => state.user);
  const dispatch = useDispatch();

  function logout(){                
    axios.post(`http://localhost:5000/logout`).then(response => {
      console.log("asdas")
      dispatch({type: "setUser", data:{}}); 
      localStorage.removeItem("user");
    });
  }

  useEffect(() => {
    let userStorage = JSON.parse(localStorage.getItem('user'));
    
    if(userStorage){  
      dispatch({type: "setUser", data:userStorage}); 
    }
  },[]);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img src={logo} width="100" height="50" />
          React Ant Design
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Table</Link></Nav.Link>
            <Nav.Link><Link to="/register">Forms</Link></Nav.Link>
            <NavDropdown title="Ant Charts" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/AntLineChart">Line</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/AntColumnChart">Column With Ajax</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Apex Charts" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/ApexVerticalBar">VerticalBar</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/authtest">authtest</Link></Nav.Link>
          </Nav>
         
            {'userName' in user ? (
              <div>Welcome {user.userName} <Button onClick={logout}>Logout</Button></div>
            ) : (
              <Link to="/Login"><Button variant="outline-success">Login</Button></Link>
            )}

                                              
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
          <Route path="/ApexVerticalBar">
            <ApexVerticalBar />
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
          <ProtectedRoute path="/authtest" component={Authtest} isAuth={isAuth}/>
        </Switch>
        </div>
    </Router>
    
  );

  
}







export default App;
