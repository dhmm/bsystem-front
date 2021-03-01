import React from 'react';
import { Modal, Button } from 'react-materialize';
import axios from 'axios';

class RegisterModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            username: "",
            email: "",
            password: "",
            message: "",            
            hasError: false
        }

        this.fullNameChanged = this.fullNameChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
    }

    fullNameChanged(event) {
        this.setState({
            fullname: event.target.value
        });
    }
    usernameChanged(event) {
        this.setState({
            username: event.target.value
        });
    }
    emailChanged(event) {
        this.setState({
            email: event.target.value
        });
    }
    passwordChanged(event) {
        this.setState({
            password: event.target.value
        });
    }


    register() {
        axios.post('http://localhost:8000/user/register', {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {                
                this.setState({
                    message: response.data.message,
                    hasError: response.data.error
                })                
                if (this.state.hasError === false) {
                    
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Modal
                actions={[
                    <Button flat modal="close" node="button">Close</Button>,
                    <Button node="button" onClick={() => { this.register(); }}>Register</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Register"
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
                style={{ width: '500px' }}
                trigger={<Button
                    href="#"
                    node="button"
                    className="btn-large maroon"
                    style={{ marginRight: '5px' }}

                >
                    Register
                                </Button>}
            >

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="fullname" type="text" className="validate" value={this.state.fullname} onChange={this.fullNameChanged} />
                                <label htmlFor="fullname">Fullname</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="username" type="text" className="validate" value={this.state.username} onChange={this.usernameChanged} />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" value={this.state.email} onChange={this.emailChanged} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" value={this.state.password} onChange={this.passwordChanged} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </form>
                    <div style={{ color: this.state.hasError === true ? 'red' : 'green' }}>{this.state.message}</div>

                </div>

            </Modal>
        )
    }
}


export default RegisterModal;