import React from 'react'
import ReactDOM from 'react-dom'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardHeader from 'material-ui/lib/card/card-header'
import CardActions from 'material-ui/lib/card/card-actions'
import CardExpandable from 'material-ui/lib/card/card-expandable'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';
import ProfessorIcon from 'material-ui/lib/svg-icons/social/school';
import WatchIcon from 'material-ui/lib/svg-icons/action/schedule';
import CreditsIcon from 'material-ui/lib/svg-icons/action/done';
import MapIcon from 'material-ui/lib/svg-icons/maps/map';
import StarIcon from 'material-ui/lib/svg-icons/toggle/star';
import EnrollmentIcon from 'material-ui/lib/svg-icons/action/subject';
import SeatIcon from 'material-ui/lib/svg-icons/action/event-seat';
import WaitIcon from 'material-ui/lib/svg-icons/action/hourglass-empty';
import LectureIcon from 'material-ui/lib/svg-icons/av/mic';
import SectionIcon from 'material-ui/lib/svg-icons/communication/forum';
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    var enrollment = [
      <ListItem key="0" primaryText="196 / 253" leftIcon={<SeatIcon />} />,
      <ListItem key="1" primaryText="No waitlist" leftIcon={<WaitIcon />} />,
      <ListItem key="2" primaryText="Lectures" leftIcon={<LectureIcon />} />,
      <ListItem key="3" primaryText="Sections" leftIcon={<SectionIcon />} />,
    ]

    return <div>
      <List subheader="">
        <ListItem primaryText="John Dow" leftIcon={<ProfessorIcon />} />
        <ListItem primaryText="Today at 2:30pm" leftIcon={<WatchIcon />} />
        <ListItem primaryText="Statler Hall 185" leftIcon={<MapIcon />} />
        <ListItem primaryText="4 credits" leftIcon={<CreditsIcon />} />
        <ListItem primaryText="4.2 / 5" leftIcon={<StarIcon />} />

        <ListItem
          primaryText="Enrollment Details"
          leftIcon={<EnrollmentIcon />}
          initiallyOpen={true}
          nestedItems={enrollment}
        />
      </List>

    </div>
  }
}

export default CourseInfo;
