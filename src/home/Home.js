
import React from 'react';
import Button from '../common/Button.js';
import RegisterModal from './RegisterModal.js';
import LoginModal from './LoginModal.js';


class Home extends React.Component {
    render() {
        return <div>
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <br /><br />
                    <h1 class="header center orange-text">Bid system</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">Demo bidding system  (by dhmm)</h5>
                        <p>&nbsp;</p>
                    </div>
                    <div class="row center">
                        <Button href="/how-it-works" color="orange" text="How it Works" />
                        <Button href="/view" color="purple" text="View items" />                                               
                        <RegisterModal/>
                        <LoginModal/>
                    </div>
                    <br /><br />



                </div>
            </div>
        </div>;
    }
}

export default Home;
