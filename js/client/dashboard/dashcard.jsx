import React from 'react'
import ReactDOM from 'react-dom'

import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardExpandable from 'material-ui/lib/card/card-expandable'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'
import CardText from 'material-ui/lib/card/card-text'
import CardTitle from 'material-ui/lib/card/card-title'

import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';

import MyRawTheme from '../theme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager'

class DashCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <Card initiallyExpanded={true}>
      <CardTitle
        subtitle={this.props.hint}
        style={{
          paddingBottom: '10px',
          border: 'none',
          borderBottom: '1px solid #eee'
        }}/>
      <CardText>
        <h2 className="compact-heading">{this.props.title}</h2>
        <h3 className="compact-heading">{this.props.subtitle}</h3>
        <p>{this.props.text}</p>
      </CardText>
    </Card>
  }
}

export default DashCard;
