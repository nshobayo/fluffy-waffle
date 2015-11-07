import React from 'react';
// import AppBar from 'material-ui/lib/app-bar';
// import NavTabs from './navtabs';
// import FlatButton from 'material-ui/lib/flat-button';
// import IconButton from 'material-ui/lib/icon-button';
// import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
// import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
// import IconMenu from 'material-ui/lib/menus/icon-menu';
// import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import CourseListItem from './listitem';

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  renderItems() {
    var listContent = []
    var key = 0;
    this.props.items.map((item) => {
      listContent[listContent.length] = <CourseListItem key={++key} avatar={item.subject.charAt(0)} title={`${item.subject} ${item.code}`} subtitle={""} subtext={[`${item.pattern} ${item.startTime} - ${item.endTime}`, `${item.instructor}`]} />
      listContent[listContent.length] = <ListDivider key={++key} inset={true} />
    })
    listContent.pop()
    return listContent
  }

  render() {
    return <List subheader={this.props.term}>
    {this.renderItems()}
    </List>
  }
}

export default CourseList;
