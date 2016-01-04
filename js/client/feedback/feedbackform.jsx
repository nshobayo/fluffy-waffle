import React from 'react'
import ReactDOM from 'react-dom'
import { Button, FormSelect, FormField, FormInput, FormRow, Form } from 'elemental';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return <Form>
      <FormRow>
        <FormField width="one-half" label="Email Address" htmlFor="email-address">
          <FormInput
            pattern="^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$"
            placeholder="e.g. ab123@cornell.edu"
            name="email-address" />
        </FormField>
        <FormField width="one-half" label="What Best Describes You?" htmlFor="industry">
          <FormSelect
            options={[{value: '0', label: 'Student'}, {value: '1', label: 'Faculty'}, {value: '2', label: 'Other'}]}
            name="industry" />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField style={{width: '100%'}} label="Suggested Improvements" htmlFor="feedback-text">
          <FormInput style={{minHeight: '240px'}} placeholder="Questions, Comments, or Suggestions" name="feedback-text" multiline />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField offsetAbsentLabel>
          <Button type="default">Submit Feedback</Button>
        </FormField>
      </FormRow>
    </Form>
  }
}

export default FeedbackForm;
