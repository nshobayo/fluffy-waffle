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
    return <CourseList term="Spring 2016" items={
      [{subject: "CS", code: "3110", pattern: "TH", startTime: "9:00am", endTime: "10:10am", instructor: "John Hopcroft"},
      {subject: "CS", code: "4780", pattern: "MWF", startTime: "1:25pm", endTime: "2:15pm", instructor: "John Dope"},
      {subject: "ECE", code: "4200", pattern: "MWF", startTime: "2:30pm", endTime: "3:05pm", instructor: "John Stewart"}]
    }/>
  }

  render() {
    return <form>
      <div className={"row"}>
        <div className={"col-6 pad"}>
          <TextField
            hintText="e.g. 1200, CS 3xx0, Python"
            floatingLabelText="Search for class" style={{width: "100%"}} />
        </div>
      </div>
      {this.searchCourses()}
      <h2>Course Info</h2>
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

    </form>
  }
}

export default AddForm;
