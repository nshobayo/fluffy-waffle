import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

class FloatingAddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }

    render() {
        return <FloatingActionButton
        style={
            {
                position: "absolute",
                right: "20px",
                bottom: "0"
            }
        }
        iconClassName="icon-action-add" />
    }
}

export default FloatingAddButton;
