import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationBack from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme.js';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    let topBarIconStyle = {
      fill: MyRawTheme.palette.toolBarText1Color,
      color: MyRawTheme.palette.toolBarText1Color
    };

    return <AppBar
      titleStyle={{color: MyRawTheme.palette.toolBarText1Color}}
      style={
        this.props.noShadow ? {
          backgroundColor: MyRawTheme.palette.toolBarPrimary1Color,
          boxShadow: 'none'
        } : {
          backgroundColor: MyRawTheme.palette.toolBarPrimary1Color
        }
      }
    title={this.props.title}
    iconElementLeft={
      <Link to={this.props.returnTo} >
        <IconButton iconStyle={topBarIconStyle} >
          <NavigationBack />
        </IconButton>
      </Link>
    } />;
  }
}

export default TopBar;
