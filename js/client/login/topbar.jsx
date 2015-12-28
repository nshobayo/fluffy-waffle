import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationBack from 'material-ui/lib/svg-icons/navigation/chevron-left';
import SlideNav from '../slidenav'
import Login from '../login'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme.js';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "goBack") {
      location.replace("/dashboard")
    }
  }

  render() {
    return <div>
      <AppBar
      style={{backgroundColor: 'transparent', boxShadow: 'none'}}
      title={this.props.title}
      iconElementLeft={
        <IconButton onClick={this.handleClick.bind(this, "goBack")} ><NavigationBack /></IconButton>
      }
      iconElementRight={
        <IconButton onClick={this.handleClick.bind(this, "showMore")} ><MoreVertIcon /></IconButton>
      } />
    </div>;
  }
}

export default TopBar;
