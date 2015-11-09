import React from 'react'
import ReactDOM from 'react-dom'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardMedia from 'material-ui/lib/card/card-media'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';
import ThemeManager from 'material-ui/lib/styles/theme-manager'

class DashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <Card initiallyExpanded={true}>
      <CardMedia overlay={<CardTitle title={this.props.text} subtitle=""/>}>
        <img src="http://www.photos-public-domain.com/wp-content/uploads/2012/03/canadian-geese-in-blue-water-190x190.jpg"/>
      </CardMedia>
    </Card>
  }
}

export default DashCard;
