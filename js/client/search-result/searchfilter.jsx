import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import Colors from 'material-ui/lib/styles/colors'
import CourseList from './../courselist'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import {ClearFix, Mixins, SelectField, Paper, MenuItem} from 'material-ui';
import { Row, Col } from 'elemental';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    let subjects = [
     { payload: '1', text: 'CS' },
     { payload: '2', text: 'Biology' },
     { payload: '3', text: 'History' },
     { payload: '4', text: 'Music' },
     { payload: '5', text: 'Physics' }
    ];

    let levels = [
     { payload: '1', text: '1000' },
     { payload: '2', text: '2000' },
     { payload: '3', text: '3000' },
     { payload: '4', text: '4000' },
     { payload: '5', text: '5000+' }
    ];

    let credits = [
     { payload: '1', text: 'Graded' },
     { payload: '2', text: 'S/U' },
     { payload: '3', text: '5+' },
     { payload: '4', text: '4' },
     { payload: '5', text: '3' },
     { payload: '6', text: '2' },
     { payload: '7', text: '1' }
    ];

    return <div className="row pad-medium"><form><Row>
      <Col sm="1/3">
        <SelectField style={{width: "100%"}}
          floatingLabelText="Subject"
          value={{ payload: '1', text: 'CS' }}
          onChange={this.handleSelectValueChange.bind(null, 'SubjectSelect')}
          menuItems={subjects} />
      </Col>
      <Col sm="1/3">
        <SelectField style={{width: "100%"}}
          floatingLabelText="Levels"
          value={{ payload: '1', text: 'CS' }}
          onChange={this.handleSelectValueChange.bind(null, 'SubjectSelect')}
          menuItems={levels} />
      </Col>
      <Col sm="1/3">
        <SelectField style={{width: "100%"}}
          floatingLabelText="Grading / Credits"
          value={{ payload: '1', text: 'CS' }}
          onChange={this.handleSelectValueChange.bind(null, 'SubjectSelect')}
          menuItems={credits} />
      </Col>
    </Row></form></div>
  }

  handleSelectValueChange(name, e, index, value) {
    this.setState({[name]: value});
  }
}

export default SearchFilter;
