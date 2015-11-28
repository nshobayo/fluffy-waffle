import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menu/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import NavigationMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';

class SlideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.setState = this.setState.bind(this)
  }

  toggle() {
    this.refs.leftNav.toggle();
    this.setState({toggle: false});
  }

  render() {
    var menuItems = [
      {
         iconClassName: 'icon-navigation-expand-more',
         type: MenuItem.Types.LINK,
         payload: '/dashboard',
         text: 'Dashboard'
      },
      {
         text: 'Customize',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: '/calendar',
         text: 'Calendar'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '/schedule',
         text: 'Schedule'
      },
      {
         type: MenuItem.Types.LINK,
         payload: '/todos',
         text: 'Todos'
      },
      { type: MenuItem.Types.SUBHEADER, text: '' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'Settings'
      },
      {
         text: 'Help & feedback',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'About',
         disabled: true
      },
    ];

    if (this.state.open) {
      toggle();
    }
    //Hideable Left Nav
    return <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
  }
}

export default SlideNav;