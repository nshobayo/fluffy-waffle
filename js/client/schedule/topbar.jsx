import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SlideNav from '../slidenav'

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "toggleSlideNav") {
      this.refs.slideNav.toggle();
    }
  }

  render() {
    return <div>
      <AppBar
      title={this.props.title}
      iconElementLeft={
        <IconButton onClick={this.handleClick.bind(this, "toggleSlideNav")} >
          <NavigationMenuIcon />
        </IconButton>
      }
      iconElementRight={
        <IconMenu iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
        </IconMenu>
      } />
      <SlideNav ref="slideNav" />
    </div>;
  }
}

export default TopBar;
