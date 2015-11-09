import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <AppBar
    title={this.props.title}
    iconElementRight={
      <IconMenu iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }>
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
      </IconMenu>
    } />;
  }
}

export default TopBar;
