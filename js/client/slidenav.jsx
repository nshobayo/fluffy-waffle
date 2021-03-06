import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import Menu from 'material-ui/lib/menu/menu';
import MenuItem from 'material-ui/lib/menu/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import { Row, Col } from 'elemental';

import RAvatar from 'react-avatar';

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
import ListDivider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';

class SlideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount, open: false};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "goTo") {
      location.replace(arg1)
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    // hideable Right Nav
    return <LeftNav
              open={this.state.open}
              ref="rightNav"
              openRight={true}
              docked={false}
              style={{color: Colors.darkBlack}}
              overlayClassName="nav-overlay" >
      <Row style={{paddingTop: '12vmin', paddingBottom: '12vmin'}}>
        <div style={{height: '100px', margin: 'auto'}} >
          <RAvatar
            name="John Dough"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/245px-Steve_Jobs_Headshot_2010-CROP.jpg"
            size={100}
            round={true} />
        </div>
      </Row>
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
          onClick={this.handleClick.bind(this, "goTo", "/login")} />
      </List>
    </LeftNav>
  }
}

export default SlideNav;