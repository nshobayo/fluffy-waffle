import React from 'react'
import ReactDOM from 'react-dom'
import Card from 'material-ui/lib/card/card'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardActions from 'material-ui/lib/card/card-actions'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';
import ThemeManager from 'material-ui/lib/styles/theme-manager'

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <Card initiallyExpanded={true}>
      <CardMedia>
        <img src="http://lorempixel.com/600/337/nature/"/>
      </CardMedia>
      <CardTitle
        title="CS 2110 - Introduction to Asian American Studies"
        subtitle="10:10 AM - 11:00 AM | Statler Hall 185 | 3 Cr" />
      <CardText>
        <p>
          Offered by David Gries.
        </p>
      </CardText>
      <CardActions expandable={true}>
        <div className="row">
          <FlatButton label="Add" className="right" />
          <FlatButton label="Details" className="right" />
        </div>
      </CardActions>
    </Card>
  }
}

export default CourseInfo;
