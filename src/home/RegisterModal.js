import React from 'react';
import { Modal, Button } from 'react-materialize';

class RegisterModal extends React.Component {

    render() {
        return (
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>,
                    <Button node="button" waves="blue" onClick={() => { alert('asd') }}>Register</Button>
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
                                    <input id="first_name" type="text" class="validate" />
                                    <label for="first_name">Fullname</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="first_name" type="text" class="validate" />
                                    <label for="first_name">Username</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="password" type="password" class="validate" />
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