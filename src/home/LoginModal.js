import React from 'react';
import { Modal, Button } from 'react-materialize';
//import Button from '../common/Button.js';

class LoginModal extends React.Component {

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
                <p>
                    <form class="col s12">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate" />
                            <label for="first_name">Username</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>
                    </form>
                </p>
            </Modal >
        )
    }
}


export default LoginModal;