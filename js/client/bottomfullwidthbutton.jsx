import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './theme.js';
import RaisedButton from 'material-ui/lib/raised-button';

class BottomFullWidthButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  //the key passed through context must be called "muiTheme"
  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  getChildContext() {
  return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  render() {
    return <RaisedButton
      primary={false}
      secondary={true}
      label="Add this class"
      style={{
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0"
      }} />
  }
}

export default BottomFullWidthButton;
