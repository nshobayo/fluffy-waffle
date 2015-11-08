import React from 'react'
import ReactDOM from 'react-dom'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardActions from 'material-ui/lib/card/card-actions'
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors'
import Avatar from 'material-ui/lib/avatar';
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import InstructorList from './instructorlist'

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <Card initiallyExpanded={true}>
      <CardTitle title="CS 2110 - Introduction to Asian American Studies" subtitle="1.5 Hrs | 3 Cr | MWF" />
      <CardText expandable={true}>
        <p>
          This course examines the historical and contemporary issues of Asian Americans from the 1960s Civil Rights Era to the current moment of what has been termed the Post-Racial Era of the 21st century. We will analyze major themes such as race and class relations, gender and the family, immigration and globalization, religion and community activism.
        </p>
        <p>
          In the first half of this course, we will learn fundamental concepts and ideas by examining major events, including the Asian American Movement, the murder of Vincent Chin, and the LA Uprisings.
        </p>
        <p>
          In the second half of this course, we will examine how race and gender relations change alongside contemporary moments of globalization and the economy through a variety of topics including interracial marriages, refugees and welfare, the Tiger Mother, and affirmative action.
        </p>
      </CardText>
      <CardActions expandable={true}>
        <div className="row">
          <FlatButton label="Add" className="right" />
          <FlatButton label="Pin" className="right" />
        </div>
      </CardActions>
      <InstructorList items=
        {
           [
              {
                 fname:"John",
                 lname:"Hopcroft",
                 department:"Computer Science",
                 office:"426 Gates Hall"
              },
              {
                 fname:"John",
                 lname:"Dope",
                 department:"Mental Health",
                 office:"212 Hospital Drive"
              },
              {
                 fname:"John",
                 lname:"Stewart",
                 department:"Laughter Science",
                 office:"555 Comedy Central"
              }
           ]
        }
       />
    </Card>
  }
}

export default CourseInfo;
