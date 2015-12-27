import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field'
import SelectField from 'material-ui/lib/select-field'
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import { Row, Col } from 'elemental';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/divider';
import SearchSuggestionItem from './searchsuggestionitem'

class SearchSuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  renderItems() {
    var listContent = []
    var key = 0;
    this.props.items.map((item) => {
      listContent[listContent.length] = <SearchSuggestionItem key={++key} text={item.text} subtext={item.subtext} highlight={item.highlight} type={'Course'} />
      listContent[listContent.length] = <ListDivider key={++key} />
    })
    listContent.pop()
    return listContent
  }

  render() {
    return <div style={this.props.style || {paddingTop: "0"}} className="row pad-medium">
      <Paper zDepth={1}>
        <List subheader={this.props.subheader} style={{marginTop: "1px"}} >
          {this.renderItems()}
        </List>
      </Paper>
    </div>
  }
}

export default SearchSuggestions;
