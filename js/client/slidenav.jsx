import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import Menu from 'material-ui/lib/menu/menu';
import MenuItem from 'material-ui/lib/menu/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import Login from './login'

import DashboardIcon from 'material-ui/lib/svg-icons/av/fiber-smart-record';
import CustomizeIcon from 'material-ui/lib/svg-icons/image/color-lens';
import AssignmentIcon from 'material-ui/lib/svg-icons/action/assignment';
import CalendarIcon from 'material-ui/lib/svg-icons/action/date-range';
import FeedbackIcon from 'material-ui/lib/svg-icons/communication/chat-bubble-outline';
import WatchIcon from 'material-ui/lib/svg-icons/action/schedule';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';
import AboutIcon from 'material-ui/lib/svg-icons/action/info-outline';
import SignInIcon from 'material-ui/lib/svg-icons/action/exit-to-app';

import Colors from 'material-ui/lib/styles/colors'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';

class SlideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.setState = this.setState.bind(this)
  }

  handleClick(arg0, arg1) {
    if (arg0 === "goTo") {
      location.replace(arg1)
    }
  }

  toggle() {
    this.refs.leftNav.toggle();
    this.setState({toggle: false});
  }

  render() {
    if (this.state.open) {
      toggle();
    }

    // hideable Left Nav
    return <LeftNav ref="leftNav" docked={false} style={{color: Colors.darkBlack}}>
      <List>
        <ListItem
          primaryText="Dashboard"
          leftIcon={<DashboardIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/dashboard")} />
        <ListItem
          primaryText="Customize"
          leftIcon={<CustomizeIcon />}
          onClick={this.handleClick.bind(this, "/dashboard?edit")} />
        <ListItem
          primaryText="Calendar"
          leftIcon={<CalendarIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/calendar")} />
        <ListItem
          primaryText="Schedule"
          leftIcon={<WatchIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/schedule")} />
        <ListItem
          primaryText="Todo list"
          leftIcon={<AssignmentIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/todo")} />
      </List>
      <ListDivider />
      <List>
        <ListItem
          primaryText="Settings"
          rightIcon={<SettingsIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/settings")} />
        <ListItem
          primaryText="Help & feedback"
          rightIcon={<FeedbackIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/feedback")} />
        <ListItem
          primaryText="About"
          rightIcon={<AboutIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/about")} />
        <ListItem
          primaryText="Sign in / register"
          rightIcon={<SignInIcon />}
          onClick={this.handleClick.bind(this, "goTo", "/account")} />
      </List>
    </LeftNav>
  }
}

export default SlideNav;