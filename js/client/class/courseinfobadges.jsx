import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Pill } from 'elemental';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class CourseInfoBadges extends React.Component {
  render () {
  return <Row
    className="class-badges" style={{margin: '0', paddingTop: '15px', paddingBottom: '10px', width: '100%'}}>
    <Col style={{textAlign: 'center'}}>
    <Pill label="Follow" type="success-inverted" />
    <Pill label="Computer Science" type="primary" onClear={this.handleClear} />
    <Pill label="Spring 2016" type="primary" onClear={this.handleClear} />
    <Pill label="Python" type="primary" onClear={this.handleClear} />
    </Col>
  </Row>;
  }
}

export default CourseInfoBadges;