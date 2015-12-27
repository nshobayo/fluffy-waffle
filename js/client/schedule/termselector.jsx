import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field'
import SelectField from 'material-ui/lib/select-field'
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import { Row, Col } from 'elemental';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import CalendarIcon from 'material-ui/lib/svg-icons/action/date-range';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import IconButton from 'material-ui/lib/icon-button';

class TermSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <form>
      <div className="row pad-medium">
        <Paper zDepth={1}>
          <DropDownMenu value={7} style={{height: 'auto'}} underlineStyle={{display: "none"}} >
            <MenuItem value={1} primaryText="Fall 2014"/>
            <MenuItem value={2} primaryText="Winter 2015"/>
            <MenuItem value={3} primaryText="Spring 2015"/>
            <MenuItem value={4} primaryText="Summer 2015"/>
            <MenuItem value={5} primaryText="Fall 2015"/>
            <MenuItem value={6} primaryText="Winter 2016"/>
            <MenuItem value={7} primaryText="Spring 2016"/>
          </DropDownMenu>
          <Link to={"/calendar"}>
            <IconButton style={{height: '56px', float: 'right'}} >
              <CalendarIcon />
            </IconButton>
          </Link>
        </Paper>
      </div>
    </form>
  }
}

export default TermSelector;
