import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme.js';

class NavTabs extends React.Component {
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

  renderItems() {
    var key = 0;
    return this.props.items.map((item) => {
      return <Tab
        key={++key} label={item.label}
        style={{color: MyRawTheme.palette.toolBarText1Color}} >
      {item.content}
      </Tab>
    })
  }

  render() {
    return <Tabs
      tabItemContainerStyle={{backgroundColor: MyRawTheme.palette.toolBarPrimary1Color}}>
      {this.renderItems()}
    </Tabs>;
  }
}

export default NavTabs;
