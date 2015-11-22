import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import SlideNav from '../slidenav'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "submitForm") {
      location.replace("/schedule")
    } else if (arg0 === "cancelForm") {
      location.replace("/schedule")
    }
  }

  render() {
    return <div>
      <AppBar
      title={this.props.title}
      iconElementLeft={
        <IconButton onClick={this.handleClick.bind(this, "cancelForm")} ><NavigationClose /></IconButton>
      }
      iconElementRight={
        <FlatButton label="Save" onClick={this.handleClick.bind(this, "submitForm")} />
      } />
      <SlideNav ref="slideNav" />
    </div>;
  }
}

export default TopBar;
