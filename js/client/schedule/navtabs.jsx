import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme.js';

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount + 1, value: '0'};
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

  handleChange = (value) => {
    console.log('whats going on')
    this.setState({
      value: value
    });
  }

  renderItems() {
    var key = 0;
    return this.props.items.map((item) => {
      console.log(key)
      return <Tab
        key={key} label={item.label} value={(key++).toString()}
        style={{color: MyRawTheme.palette.toolBarText1Color}} >
      {item.content}
      </Tab>
    })
  }

  render() {
    let tabs = this.renderItems();
    return <Tabs
      value={this.state.value}
      onChange={this.handleChange}
      tabItemContainerStyle={{backgroundColor: MyRawTheme.palette.toolBarPrimary1Color}}>
      {tabs}
    </Tabs>;
  }
}

export default NavTabs;
