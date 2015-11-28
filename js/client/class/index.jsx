import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import CourseInfo from './courseinfo'
import { Row, Col, Pill } from 'elemental';
import FloatingAddButton from './../floataddbutton'
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
      <Row className="class-badges" style={{paddingTop: '15px', paddingBottom: '10px', width: '100%'}}><Col style={{textAlign: 'right'}}>
        <Pill label="Follow" type="success-inverted" />
        <Pill label="Computer Science" type="primary" onClear={this.handleClear} />
        <Pill label="Spring 2016" type="primary" onClear={this.handleClear} />
        <Pill label="Python" type="primary" onClear={this.handleClear} />
      </Col></Row>
      <CourseInfo />
    </div>
  }
}

export default Class;
