import React from 'react';
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SlideNav from '../slidenav';
import TopBar from './../topbar';
import AutoComplete from 'material-ui/lib/auto-complete';

class SearchBar extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {count: props.initialCount};
  	}

  	handleClick(arg0, arg1) {
    	if (arg0 === "toggleSlideNav") {
      		this.refs.slideNav.toggle();
    	}
  	}

	render () {
		return <TopBar selectedIndex={1} />;
	}
}

export default SearchBar;