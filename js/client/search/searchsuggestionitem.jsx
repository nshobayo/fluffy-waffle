import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';

class InstructorListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }

    handleClick(arg0, arg1) {
      if (arg0 === "goTo") {
        location.replace(arg1)
      }
    }

    render() {
        let iconButtonElement = (
          <IconButton
          touch={true}
          tooltip="more"
          tooltipPosition="bottom-left">
          <MoreVertIcon color={Colors.grey400} />
          </IconButton>
          );

        let rightIconMenu = (
          <IconMenu iconButtonElement={iconButtonElement}>
          <MenuItem>Email</MenuItem>
          </IconMenu>
          );

        if (this.props.subtext) {
          return <ListItem
            primaryText={this.props.text}
            secondaryText={<p>{this.props.subtext}</p>}
            secondaryTextLines={1}
            onClick={this.handleClick.bind(this, "goTo", "/search-result")}/>
        }

        return <ListItem
          primaryText={this.props.text}
          onClick={this.handleClick.bind(this, "goTo", "/search-result")}/>
    }
}

export default InstructorListItem;
