import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';


class TopBar extends React.Component {
  render() {
    return <AppBar
    title="CCP"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }>
      <MenuItem primaryText="Sign in" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="About" />
      </IconMenu>
    } />;
  }
}

export default TopBar;
