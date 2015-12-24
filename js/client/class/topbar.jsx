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
    if (arg0 === "goBack") {
      location.replace("/schedule")
    }
  }

  render() {
    var title = this.props.title;
    var subtitle = "1.5 Hrs | 3 Cr | MWF";
    return <div>
      <AppBar
      title={<div className="topbar-text-wrapper"><br style={{lineHeight:'64px'}} />{title}<br /><span id="topbar-subtitle">{subtitle}</span></div>}
      iconElementLeft={
        <IconButton onClick={this.handleClick.bind(this, "goBack")} ><NavigationBack /></IconButton>
      }
      iconElementRight={
        <IconButton onClick={this.handleClick.bind(this, "doEdit")} ><EditIcon /></IconButton>
      } />
    </div>;
  }
}

export default TopBar;
