import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field'
import SelectField from 'material-ui/lib/select-field'
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import { Row, Col } from 'elemental';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <div className="row pad-medium">
      <form>
        <Paper zDepth={1}>
          <TextField
            style={{marginLeft: "10px", width: "100%"}}
            hintText="Search"
            underlineStyle={{display: "none"}} />
        </Paper>
      </form>
    </div>
  }
}

export default SearchBar;
