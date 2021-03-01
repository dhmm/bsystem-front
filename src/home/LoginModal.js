import React from 'react';
import { Modal, Button } from 'react-materialize';
//import Button from '../common/Button.js';

class LoginModal extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {            
            username: "",            
            password: ""
        }
        
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
    }

    usernameChanged(event) {
        this.setState({
            username : event.target.value
        });
    }
    
    passwordChanged(event) {
        this.setState({
            password : event.target.value
        });
    }

    render() {
        return (
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>,
                    <Button  node="button" onClick={ ()=>{alert('asd')}}>Login</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Login"
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                style={{ width:'350px'}}
                trigger={<Button
                    href="#"
                    node="button"
                    className="btn-large green"
                    style={{ marginRight: '5px' }}

                >
                    Login
                                </Button>}
            >
                <div>
                    <form className="col s12">
                        <div className="input-field col s6">
                            <input id="username" type="text" className="validate" value={this.state.username} onChange={this.usernameChanged}  />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password" type="password" className="validate" value={this.state.password} onChange={this.passwordChanged} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </form>
                </div>
            </Modal >
        )
    }
}


export default LoginModal;