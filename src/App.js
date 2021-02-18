import React from 'react';
import 'materialize-css';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="/">BS</a>}
                centerChildren
                className="light-blue lighten-1"
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="/login">
                    Login
                </NavItem>
                <NavItem href="/register">
                    Register
                </NavItem>
            </Navbar>
            
            <Switch>    
                
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
                <Route path="/how-it-works">
                    <HowItWorks />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <br /><br />
                    <h1 class="header center orange-text">Bid system</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">Demo bidding system by dhmm</h5>
                        <p>You can login, register and create items for bidding. Also you can bid to existing items.</p>
                    </div>
                    <div class="row center">
                        <Button 
                            href="/how-it-works"
                            node="a"
                            className="btn-large waves-effect waves-light orange"
                            style={{ marginRight: '5px' }}
                            waves="light"
                        >
                            How it works ?
                        </Button>
                        <Button
                            href="/view"
                            node="a"
                            className="btn-large waves-effect waves-light purple"
                            style={{ marginRight: '5px' }}
                            waves="light"
                        >
                            View items
                        </Button>
                        <Button
                            href="/register"
                            node="a"
                            className="btn-large waves-effect waves-light blue"
                            style={{ marginRight: '5px' }}
                            waves="light"
                        >
                            Register
                        </Button>
                        <Button
                            href="/login"
                            node="a"
                            className="btn-large waves-effect waves-light green"
                            style={{ marginRight: '5px' }}
                            waves="light"
                        >
                            Login
                        </Button>
                    </div>
                    <br /><br />



                </div>
            </div>
        </div>
    );
}
function Register() {
    return (
        <div>Register</div>
    );
}
function Login() {
    return (
        <div>Login</div>
    );
}
function View() {
    return (
        <div>View</div>
    );
}
function HowItWorks() {
    return (
        <div>How it works !</div>
    )
}
export default App;
