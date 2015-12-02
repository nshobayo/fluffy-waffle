import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import TopTabs from './navtabs'
import CourseList from './../courselist'
import SearchBar from './searchBar'
import TextField from 'material-ui/lib/text-field'
import FloatingAddButton from './../floataddbutton'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Course from './course'
import Draggable from 'react-draggable'

import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

class Calendar extends React.Component {
    searchCourses() {
        var courselist = <CourseList term="Spring 2016" items={
            [{subject: "CS", code: "3110", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
            {subject: "CS", code: "4780", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
            {subject: "ECE", code: "4200", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
        }/>
        return courselist
    }

    render () {
        // mock data
        var result = [];
        for (var i = 0; i <= 2; i++){
            result.push(<Course x={i*200} y={i*200}/>)
        }

        return <div>
            <SearchBar/>

            {result}

            <div id="float-button-container">
                <Link to={"/add-class"}>
                    <FloatingAddButton />
                </Link>
            </div>
        </div>;
    }
}

export default Calendar;
