import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import TopTabs from './navtabs'
import CourseList from './../courselist'
import FloatingAddButton from './../floataddbutton'

class Schedule extends React.Component {
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
            <TopBar />
            <TopTabs items={
                [{label: "Courses", content: this.searchCourses()},
                {label: "Exams", content: this.searchCourses()},
                {label: "Breaks", content: this.searchCourses()}]
            } />
            <div id="float-button-container">
                <FloatingAddButton />
            </div>
        </div>
    }
}

export default Schedule;
