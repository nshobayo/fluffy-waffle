import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import AccountIcon from 'material-ui/lib/svg-icons/action/account-circle';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SlideNav from '../slidenav'
import Login from '../login'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme.js';

class TopBar extends React.Component {
  //the key passed through context must be called "muiTheme"
  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "toggleSlideNav") {
      this.refs.slideNav.toggle();
    } else if (arg0 === "showLoginDialog") {
      this.refs.loginDialog.show();
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
          <IconButton onClick={this.handleClick.bind(this, "showLoginDialog")} >
            <AccountIcon />
          </IconButton>
        } />
      <SlideNav ref="slideNav" />
      <Login ref="loginDialog" />
    </div>;
  }
}

export default TopBar;
