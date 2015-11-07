import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import TopTabs from './navtabs'
import CourseList from './../courselist'
import FloatingAddButton from './../floataddbutton'

var frame = document.getElementById("top-frame")
var header = document.getElementById("header")
var subheader = document.getElementById("subheader")
var sec1 = document.getElementById("section1")
var float = document.getElementById("float-button-container")

export default function render () {
    ReactDOM.render(<TopBar />, header)

    var courselist = <CourseList term="Spring 2016" items={
        [{subject: "CS", code: "3110", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
        {subject: "CS", code: "4780", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
        {subject: "ECE", code: "4200", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
    }/>

    ReactDOM.render(<TopTabs items={
        [{label: "Courses", content: courselist},
        {label: "Exams", content: courselist},
        {label: "Breaks", content: courselist}]
    } />, subheader)


    ReactDOM.render(<FloatingAddButton />, float)
}
