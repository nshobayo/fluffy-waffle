import React from 'react'
import Draggable from 'react-draggable'
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';

class Course extends React.Component {
	constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
        this.x = this.props.x
        this.y = this.props.y
    }
    
    //grid determines the width length of the snap grid
    render () {
    	return <Draggable grid={[50, 50]}> 
        	<Card
                style={
                    {
                        width: "10%",
                        position: "absolute",
                        top: this.x,
                        left: this.y
                    }
                }
            >
    		<CardText> fake course </CardText>
    		</Card> 
        </Draggable>
    }
}
export default Course;