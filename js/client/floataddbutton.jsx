import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './theme.js';

class FloatingAddButton extends React.Component {
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
    return <FloatingActionButton
      style={{
        position: "absolute",
        right: "20px",
        bottom: "20px"
      }}
      iconClassName="icon-action-add"
      secondary={false} />
  }
}

export default FloatingAddButton;
