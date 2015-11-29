import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';

class CourseListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }

    handleClick(arg0, arg1) {
      if (arg0 === "goToClass") {
        location.replace("/class?"+arg1);
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
          <MenuItem>Reply</MenuItem>
          <MenuItem>Forward</MenuItem>
          <MenuItem>Delete</MenuItem>
          </IconMenu>
          );

        return <ListItem
        leftAvatar={<Avatar> {this.props.avatar} </Avatar>}
        rightIconButton={rightIconMenu}
        primaryText={this.props.title}
        secondaryText={
            <p>
            <span>{this.props.subtext[0]}</span> <br/>
            <span>{this.props.subtext[1]}</span>
            </p>
        }
        secondaryTextLines={2}
        onClick={this.handleClick.bind(this, "goToClass", 4780)} />
    }
}

export default CourseListItem;
