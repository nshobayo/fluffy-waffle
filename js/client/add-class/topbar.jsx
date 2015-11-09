import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <AppBar
      title="Add Class"
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<Link to={"/schedule"}>
        <FlatButton label="Save" />
      </Link>}
    />
  }
}

export default TopBar;
