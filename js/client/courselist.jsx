import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import CourseListItem from './courselistitem';

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  renderItems() {
    var listContent = []
    var key = 0;
    this.props.items.map((item) => {
      listContent[listContent.length] = <CourseListItem
        key={++key}
        avatar={item.subject.charAt(0)}
        title={`${item.subject} ${item.code}`}
        subtext={
          [`${item.instructor}`,
          `${item.pattern} ${item.startTime} - ${item.endTime}`]
        } />
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
