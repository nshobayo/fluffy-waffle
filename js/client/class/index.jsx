import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import { Row, Col, Pill } from 'elemental';
import FloatingAddButton from './../floataddbutton'

import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardHeader from 'material-ui/lib/card/card-header'
import CardActions from 'material-ui/lib/card/card-actions'
import CardExpandable from 'material-ui/lib/card/card-expandable'

import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import AssignmentIcon from 'material-ui/lib/svg-icons/action/assignment';
import MapIcon from 'material-ui/lib/svg-icons/maps/map';
import StarIcon from 'material-ui/lib/svg-icons/toggle/star';
import HalfStarIcon from 'material-ui/lib/svg-icons/toggle/star-half';
import NoStarIcon from 'material-ui/lib/svg-icons/toggle/star-border';
import SeatIcon from 'material-ui/lib/svg-icons/action/event-seat';
import WarningIcon from 'material-ui/lib/svg-icons/alert/warning';
import WalkingIcon from 'material-ui/lib/svg-icons/maps/directions-walk';
import DiningIcon from 'material-ui/lib/svg-icons/maps/local-dining';

import ThemeManager from 'material-ui/lib/styles/theme-manager'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';
import ReactSwipe from 'react-swipe';
import CourseInfoImpression from './courseinfoimpression';
import CourseInfoTable from './courseinfotable';

import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class Class extends React.Component {
  searchCourses() {
    var courselist = <CourseList term="Spring 2016" items={
      [{subject: "CS", code: "3110", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
      {subject: "CS", code: "4780", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
      {subject: "ECE", code: "4200", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
    }/>
    return courselist
  }

  render () {
    return <div>
      <TopBar title={"CS 4780 - Intro to Machine Learning"} />
      <CourseInfoImpression />
      <h3 className='center'>Description</h3>
      <Row style={{margin: '0', paddingLeft: '20px', paddingRight: '20px', width: '100%'}}>
        <p>Machine learning is concerned with the question of how to make computers learn from experience. The ability to learn is not only central to most aspects of intelligent behavior, but machine learning techniques have become key components of many software systems. For examples, machine learning techniques are used to create spam filters, to analyze customer purchase data, to understand natural language, or to detect fraudulent credit card transactions.</p>
        <p>This course will introduce the fundamental set of techniques and algorithms that constitute machine learning as of today, ranging from classification methods like decision trees and support vector machines, over structured models like hidden Markov models, to clustering and matrix factorization methods for recommendation.</p>
      </Row>

      <h3 className='center'>Enrollment</h3>
      <Row style={{margin: '0', paddingLeft: '20px', paddingRight: '20px', width: '100%'}}>
      <CourseInfoTable
        credits={4}
        capacity={253}
        waitCapacity={0}
        availability={57}
        days={'Monday, Wednesday, Friday'}
        time={'12:00pm - 1:15pm'}
      />
      </Row>

      <h3 className='center'>Sections</h3>
      <ReactSwipe className="swipe" continuous={true}>
        {/* Card 1 */}
        <div style={{padding: '20px'}}><Card initiallyExpanded={true}>
          <CardTitle subtitle="Tu 2:00pm - 4:00pm | Ives Hall 215"/>
          <CardText>
            <h3 className="compact-heading">Section 205 (Evan McDonald)</h3>
            <List subheader="Suggestions">
              <ListItem primaryText="17 / 30" leftIcon={<SeatIcon />} />
              <ListItem primaryText="No conflicts" leftIcon={<WarningIcon />} />
              <ListItem primaryText="16 minutes walk from Stocking Hall (BIOMI 2900)" leftIcon={<WalkingIcon />} />
              <ListItem primaryText="Lunch between 12:00pm and 2:00pm" leftIcon={<DiningIcon />} />
            </List>
          </CardText>
        </Card></div>
        {/* Card 2 */}
        <div style={{padding: '20px'}}><Card initiallyExpanded={true}>
          <CardTitle subtitle="W 10:00pm - 12:00pm | Ives Hall 215"/>
          <CardText>
            <h3 className="compact-heading">Section 206 (Chris Ferrell)</h3>
            <List subheader="Suggestions">
              <ListItem primaryText="4 / 30" leftIcon={<SeatIcon />} />
              <ListItem primaryText="Starts before BIOME 3310" leftIcon={<WarningIcon />} />
              <ListItem primaryText="5 minutes walk from Olin Hall (BIOME 3310)" leftIcon={<WalkingIcon />} />
              <ListItem primaryText="Lunch between 12:00pm and 2:00pm" leftIcon={<DiningIcon />} />
            </List>
          </CardText>
        </Card></div>
      </ReactSwipe>
    </div>
  }
}

export default Class;
