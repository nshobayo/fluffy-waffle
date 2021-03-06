import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationBack from 'material-ui/lib/svg-icons/navigation/chevron-left';
import EditIcon from 'material-ui/lib/svg-icons/editor/mode-edit';
import SlideNav from '../slidenav'
import Login from '../login'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme.js';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

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

  render() {
    var title = this.props.title;
    var subtitle = this.props.subtitle;
    return <div>
      <AppBar
      title={<div className="topbar-text-wrapper">{title}<br /><span id="topbar-subtitle">{subtitle}</span></div>}
      iconElementLeft={
        <Link to={this.props.returnTo} >
          <IconButton iconStyle={{color: 'white', fill: 'white'}} >
            <NavigationBack />
          </IconButton>
        </Link>
      }
      iconElementRight={
        <FlatButton label="Filters" />
      } />
    </div>;
  }
}

export default TopBar;
