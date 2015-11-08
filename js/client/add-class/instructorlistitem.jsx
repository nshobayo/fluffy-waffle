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

        return <ListItem
        leftAvatar={<Avatar> {this.props.avatar} </Avatar>}
        rightIconButton={rightIconMenu}
        primaryText={this.props.fullname}
        secondaryText={
            <p>
            <span>{this.props.subtext[0]}</span> <br/>
            <span>{this.props.subtext[1]}</span>
            </p>
        }
        secondaryTextLines={2} />
    }
}

export default InstructorListItem;
