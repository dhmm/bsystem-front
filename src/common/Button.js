import React from 'react';
import { Button as MaterializeButton } from 'react-materialize';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <MaterializeButton
            href={this.props.href}
            node="a"
            className={"btn-large "+ this.props.color}
            style={{ marginRight: '5px' }}            
        >
            {this.props.text}
    </MaterializeButton>;
    }
}

export default Button;