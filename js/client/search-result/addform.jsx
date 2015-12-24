import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field'
import SelectField from 'material-ui/lib/select-field'
import Colors from 'material-ui/lib/styles/colors'
import CourseList from './../courselist'
import ThemeManager from 'material-ui/lib/styles/theme-manager'

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  searchCourses() {
    return <div className="row">
        <div className="col-3">
          <CourseList term="Spring 2016" items={
            [{subject: "CS", code: "3110", title: "Interfacing the Digital Domain with an Analog World", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
            {subject: "CS", code: "4780", title: "Engineering Computation", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
            {subject: "ECE", code: "4200", title: "Introduction to Probability and Inference for Random Signals and Systems", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
          }/>
        </div>
        <div className="col-3">
          <CourseList term="24 results" items={
            [{subject: "ECON", code: "1001", title: "The Physics of Life", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
            {subject: "ECON", code: "2300", title: "Digital Logic and Computer Organization", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
            {subject: "ENGRD", code: "2250", title: "The Earth System", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
          }/>
        </div>
      </div>
  }

  render() {
    return <form>
      <div className={"row"}>
        <div className={"col-6 pad"}>
          <TextField
            hintText="e.g. 1200, CS 3xx0, Python"
            floatingLabelText="Search for classes" style={{width: "100%"}} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-1 pad"}>
          <TextField
            hintText="e.g. PHYS"
            floatingLabelText="Subject" style={{width: "100%"}} />
        </div>
        <div className={"col-5 pad"}>
          <TextField
            hintText="e.g. 1100"
            floatingLabelText="Code" style={{width: "100%"}} />
        </div>
      </div>
      {this.searchCourses()}
    </form>
  }
}

export default AddForm;
