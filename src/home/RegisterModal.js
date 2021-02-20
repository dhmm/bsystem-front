import React from 'react';
import { Modal, Button } from 'react-materialize';
import axios from 'axios';

class RegisterModal extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            fullname: null,
            username: null,
            email: null,
            password: null
        }

        this.fullNameChanged = this.fullNameChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
    }

    fullNameChanged(event) {
        this.setState({
            fullname : event.target.value
        });
    }
    usernameChanged(event) {
        this.setState({
            username : event.target.value
        });
    }
    emailChanged(event) {
        this.setState({
            email : event.target.value
        });
    }
    passwordChanged(event) {
        this.setState({
            password : event.target.value
        });
    }

    register(){
        axios.post('https://localhost:8000/user/register', {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>,
                    <Button node="button" waves="blue" onClick={() => { this.register(); }}>Register</Button>
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
                <p>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="fullname" type="text" class="validate" value={this.state.fullname} onChange={this.fullNameChanged} />
                                    <label for="fullname">Fullname</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="username" type="text" class="validate" value={this.state.username} onChange={this.usernameChanged} />
                                    <label for="username">Username</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" value={this.state.email} onChange={this.emailChanged}/>
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="password" type="password" class="validate"value={this.state.password} onChange={this.passwordChanged} />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </p>
            </Modal>
        )
    }
}


export default RegisterModal;