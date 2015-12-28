import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';

import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import AssignmentIcon from 'material-ui/lib/svg-icons/action/assignment';
import CalendarIcon from 'material-ui/lib/svg-icons/action/date-range';
import FeedbackIcon from 'material-ui/lib/svg-icons/communication/chat-bubble-outline';
import ScheduleIcon from 'material-ui/lib/svg-icons/action/schedule';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';
import AboutIcon from 'material-ui/lib/svg-icons/action/info-outline';
import SignInIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import AccountIcon from 'material-ui/lib/svg-icons/action/account-circle';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SlideNav from './slidenav'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './theme.js';

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
    }
  }

  render() {
    let topBarIconStyle = {
      fill: MyRawTheme.palette.toolBarText1Color,
      color: MyRawTheme.palette.toolBarText1Color
    };

    return <div>
      <AppBar
        style={
          this.props.noShadow ? {
            backgroundColor: MyRawTheme.palette.toolBarPrimary1Color,
            boxShadow: 'none'
          } : {
            backgroundColor: MyRawTheme.palette.toolBarPrimary1Color
          }
        }
        title={this.props.title}
        titleStyle={{textAlign: 'center'}}
        iconElementLeft={
          <Tabs
            initialSelectedIndex={this.props.selectedIndex}
            tabItemContainerStyle={{backgroundColor: MyRawTheme.palette.toolBarPrimary1Color}}>
            <Tab label={
              <Link to={"/dashboard"}>
                <IconButton iconStyle={topBarIconStyle} >
                  <HomeIcon />
                </IconButton>
              </Link>
            } />
            <Tab label={
              <Link to={"/schedule"}>
                <IconButton iconStyle={topBarIconStyle} >
                  <ScheduleIcon />
                </IconButton>
              </Link>
            } />
            <Tab label={
              <Link to={"/todo"}>
                <IconButton iconStyle={topBarIconStyle} onClick={this.handleClick.bind(this, "toggleSlideNav")} >
                  <AssignmentIcon />
                </IconButton>
              </Link>
            } />
          </Tabs>
        }
        iconElementRight={
          <span>
            <IconButton iconStyle={topBarIconStyle} onClick={this.handleClick.bind(this, "toggleSlideNav")} >
              <AccountIcon />
            </IconButton>
          </span>
        }>
        {this.props.children}
      </AppBar>
      <SlideNav ref="slideNav" />
    </div>;
  }
}

export default TopBar;
