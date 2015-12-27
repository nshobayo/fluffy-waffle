import React from 'react'
import ReactDOM from 'react-dom'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardActions from 'material-ui/lib/card/card-actions'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/divider';
import InstructorListItem from './instructorlistitem'

class InstructorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  renderItems() {
    var listContent = []
    var key = 0;
    this.props.items.map((item) => {
      listContent[listContent.length] = <InstructorListItem key={++key} avatar={item.lname.charAt(0)} fullname={`${item.lname}, ${item.fname}`} subtext={[`${item.department}`, `${item.office}`]} />
      listContent[listContent.length] = <ListDivider key={++key} inset={true} />
    })
    listContent.pop()
    return listContent
  }

  render() {
    return <List subheader="Course staff">
      {this.renderItems()}
    </List>
  }
}

export default InstructorList;