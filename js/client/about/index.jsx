import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import { Row, Col, Form, FormField, FormInput, Checkbox, Button } from 'elemental'
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper'
import TopBar from './topbar';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "submitForm") {
      this.refs.loginDialog.dismiss();
    } else if (arg0 === "cancelForm") {
      this.refs.loginDialog.dismiss();
    }
  }

  show () {
    this.refs.loginDialog.setState({open: true});
  }

  renderItems() {
    var items = [
      {
         text:"Terms of Service"
      },
      {
         text:"Privacy Policy"
      },
      {
         text:"Version",
         subtext:"1.0.0Beta"
      }
    ]
    var listContent = []
    var key = 0;
    items.map((item) => {
      listContent[listContent.length] = (
        <ListItem key={++key}
          primaryText={item.text}
          secondaryText={item.subtext}
          secondaryTextLines={1} />
      )
      listContent[listContent.length] = <ListDivider key={++key} />
    })
    listContent.pop()
    return listContent
  }

  render () {
    return <div>
      <TopBar title='About' />
      <br />
      <h1 style={{
        lineHeight: '30vh',
        fontSize: '3.6rem',
        color: '#777',
        textAlign: 'center',
        fontFamily: "'Vampiro One', cursive"}}
      >
        Glassroom
      </h1>
      <div className="row pad-medium">
        <Paper zDepth={1}>
          <List subheader={this.props.subheader} style={{marginTop: "1px"}} >
            {this.renderItems()}
          </List>
        </Paper>
      </div>
    </div>;
  }
}

export default About;
