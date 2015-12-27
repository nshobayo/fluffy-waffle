import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field'
import SelectField from 'material-ui/lib/select-field'
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import { Row, Col } from 'elemental';
import IconButton from 'material-ui/lib/icon-button';
import BackIcon from 'material-ui/lib/svg-icons/navigation/arrow-back';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <div className="row pad-medium" style={{paddingBottom: '0'}} >
      <form>
        <Paper
          zDepth={1}
          style={{
            position: 'relative',
            borderRadius: '2px 2px 0 0',
            borderBottom: '2px solid #eee' }}>
          <Link to={"/schedule"}>
            <IconButton touch={true}>
              <BackIcon />
            </IconButton>
          </Link>
          <TextField
            value='CS 3'
            style={{width: 'initial', position: 'absolute', left: "58px", right: "10px"}}
            hintText="Search"
            underlineStyle={{display: "none"}} />
        </Paper>
      </form>
    </div>
  }
}

export default SearchBar;
