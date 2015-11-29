import React from 'react'
import ReactDOM from 'react-dom'
import Table from 'material-ui/lib/table/table'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableBody from 'material-ui/lib/table/table-body'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableFooter from 'material-ui/lib/table/table-footer'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';
import { Row, Col } from 'elemental';
import ReactSwipe from 'react-swipe';
import CourseInfoImpression from './courseinfoimpression';

class CourseInfoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn style={{textAlign: 'right'}}></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>Credits</TableRowColumn>
          <TableRowColumn>{this.props.credits}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Capacity</TableRowColumn>
          <TableRowColumn>{this.props.capacity}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Waitlist</TableRowColumn>
          <TableRowColumn>{this.props.waitCapacity}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Availability</TableRowColumn>
          <TableRowColumn>{this.props.availability}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Day(s)</TableRowColumn>
          <TableRowColumn>{this.props.days}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Time</TableRowColumn>
          <TableRowColumn>{this.props.time}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>;
  }
}

export default CourseInfoTable;