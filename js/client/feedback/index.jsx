import React from 'react'
import ReactDOM from 'react-dom'
import Paper from 'material-ui/lib/paper'
import TopBar from './topbar';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import FeedbackForm from './feedbackform';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render () {
    return <div>
      <TopBar title='Feedback' />
      <br />
      <h2 style={{
        lineHeight: '10vh',
        color: '#777',
        textAlign: 'center'}}
      >Tell us what you think.</h2>
      <div className="row pad-medium">
        <Paper zDepth={1}>
          <div className="row pad-medium">
            <FeedbackForm />
          </div>
        </Paper>
      </div>
    </div>;
  }
}

export default Feedback;
