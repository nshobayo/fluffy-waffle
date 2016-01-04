import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import SearchFilter from './searchfilter'
import CourseInfo from './courseinfo'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class SearchResult extends React.Component {
    render () {
      return <div>
        <TopBar returnTo={this.props.returnTo} title={"2110"} subtitle={"4 results"} />
        <SearchFilter />
        <CourseInfo />
        <CourseInfo />
        <CourseInfo />
        <CourseInfo />
      </div>
    }
}

export default SearchResult;
