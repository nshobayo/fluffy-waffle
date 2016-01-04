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
import ProfessorIcon from 'material-ui/lib/svg-icons/social/school';
import WatchIcon from 'material-ui/lib/svg-icons/action/schedule';
import AssignmentIcon from 'material-ui/lib/svg-icons/action/assignment';
import CreditsIcon from 'material-ui/lib/svg-icons/action/done';
import MapIcon from 'material-ui/lib/svg-icons/maps/map';
import StarIcon from 'material-ui/lib/svg-icons/toggle/star';
import HalfStarIcon from 'material-ui/lib/svg-icons/toggle/star-half';
import NoStarIcon from 'material-ui/lib/svg-icons/toggle/star-border';
import EnrollmentIcon from 'material-ui/lib/svg-icons/action/subject';
import SeatIcon from 'material-ui/lib/svg-icons/action/event-seat';
import WaitIcon from 'material-ui/lib/svg-icons/action/hourglass-empty';
import LectureIcon from 'material-ui/lib/svg-icons/av/mic';
import SectionIcon from 'material-ui/lib/svg-icons/communication/forum';
import WarningIcon from 'material-ui/lib/svg-icons/alert/warning';
import WalkingIcon from 'material-ui/lib/svg-icons/maps/directions-walk';
import DiningIcon from 'material-ui/lib/svg-icons/maps/local-dining';
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';
import { Row, Col } from 'elemental';
import ReactSwipe from 'react-swipe';
import RAvatar from 'react-avatar';
import CourseInfoBadges from './courseinfobadges';

class CourseInfoImpression extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <div>
      <Row style={{margin: '0', paddingTop: '15px', paddingBottom: '10px', width: '100%'}}>
        <Col style={{textAlign: 'center'}}>
          <h2>Intro to Machine Learning</h2>
          <div>
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><NoStarIcon />
            4.2
          </div>
          <div style={{margin: '10px'}}>
            <RAvatar name={'John Dow'} facebook-id={'zuck'} google-id={104560124403688998123} size={72} round={true} />
          </div>
          <h4 style={{marginTop: '15px'}}>Professor John Dow</h4>
        </Col>
      </Row>
      <CourseInfoBadges />
      <hr />
      <Row style={{margin: '0', paddingTop: '0', paddingBottom: '10px', width: '100%'}}>
        <Col style={{textAlign: 'center'}} sm="1/3">
          <WatchIcon />
          <div>2:30pm today</div>
        </Col>
        <Col style={{textAlign: 'center'}} sm="1/3">
          <MapIcon />
          <div>185 Statler Hall</div>
        </Col>
        <Col style={{textAlign: 'center'}} sm="1/3">
          <AssignmentIcon />
          <div>1 assignment</div>
        </Col>
      </Row>
    </div>;
  }
}

export default CourseInfoImpression;