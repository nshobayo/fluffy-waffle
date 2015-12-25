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
    return <form>
    <div className="row pad-medium"
      style={{position: 'relative', height: '60vmin', backgroundSize: 'cover', backgroundImage: 'url(' + 'http://lorempixel.com/600/337/nature/' + ')'}}>
        <Paper zDepth={1} style={{position: 'absolute', left: '10px', right: '10px', bottom: '10vmin'}}>
          <TextField
            style={{marginLeft: "10px", width: "100%"}}
            hintText="What's on your mind?"
            underlineStyle={{display: "none"}} />
        </Paper>
      </div>
    </form>
  }
}

export default SearchBar;
