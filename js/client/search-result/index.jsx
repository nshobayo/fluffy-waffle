import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import AddForm from './addform'
import CourseInfo from './courseinfo'

class AddClass extends React.Component {
    render () {
        return <div>
            <TopBar title={"New Class"} />
            <AddForm />
            <CourseInfo />
        </div>
    }
}

export default AddClass;
