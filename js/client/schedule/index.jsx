import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './../topbar'
import TopTabs from './navtabs'
import CourseList from './../courselist'
import FloatingAddButton from './../floataddbutton'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import TermSelector from './termselector';
import Paper from 'material-ui/lib/paper';

class Schedule extends React.Component {

  searchCourses() {
    var courselist = <CourseList term={'Courses'} items={
      [{subject: "CS", code: "3110", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
      {subject: "CS", code: "4780", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
      {subject: "ECE", code: "4200", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
    }/>
    return courselist
  }

  render () {
    return <div>
      <TopBar selectedIndex={1} />
      <TermSelector />
      <div style={{paddingTop: "0"}} className="row pad-medium">
        <Paper zDepth={1}>
          {this.searchCourses()}
        </Paper>
      </div>
      <div id="float-button-container">
        <Link to={"/search"}>
          <FloatingAddButton />
        </Link>
      </div>
    </div>
  }
}

export default Schedule;
