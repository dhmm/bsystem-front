
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavItem, Icon, Button, Modal } from 'react-materialize';

import Home from './home/Home';
import HowItWorks from './how-it-works/HowItWorks';

class App extends React.Component {
    render() {
        return <Router>
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
                <NavItem>
                    Login
                </NavItem>
                <NavItem>
                    Register
                </NavItem>                
            </Navbar>
            <Switch>
                <Route path="/how-it-works">
                    <HowItWorks/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>;
    }
}

export default App;











// im


// function Home() {


//     return (
//         
//     );
// }
// // function Register() {
// //     return (
// //         <div>Register</div>
// //     );
// // }
// // function Login() {
// //     return (
// //         <div>Login</div>
// //     );
// // }
// function View() {
//     return (
//         <div>View</div>
//     );
// }
// function HowItWorks() {
//     return (
//         <div>How it works !</div>
//     )
// }
// export default App;
