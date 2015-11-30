import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './topbar'
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import { Row, Col, Form, FormField, FormInput, Checkbox, Button } from 'elemental'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleClick(arg0, arg1) {
    if (arg0 === "submitForm") {
      this.refs.loginDialog.dismiss();
    } else if (arg0 === "cancelForm") {
      this.refs.loginDialog.dismiss();
    }
  }

  show () {
    this.refs.loginDialog.setState({open: true});
  }

  render () {
    var customActions = [
      <FlatButton
        key={0}
        label="Cancel"
        secondary={true}
        onClick={this.handleClick.bind(this, "cancelForm")} />,
      <FlatButton
        key={1}
        label="Sign in"
        primary={true}
        onClick={this.handleClick.bind(this, "submitForm")} />
    ];

    return <Dialog
      ref="loginDialog"
      title="Sign in to Glassroom"
      actions={customActions}
      open={this.state.showDialogCustomActions}
      onRequestClose={this._handleRequestClose}>
      <Row style={{margin: '0', paddingTop: '15px', paddingBottom: '10px', width: '100%'}}>
        <Col sm="1/5" />
        <Col sm="3/5" style={{paddingTop: '30px'}}>
          <Form>
            <FormField label="Email address" htmlFor="basic-form-input-email">
              <FormInput autofocus type="email" placeholder="Enter email" name="basic-form-input-email" />
            </FormField>
            <FormField label="Password" htmlFor="basic-form-input-password">
              <FormInput type="password" placeholder="Password" name="basic-form-input-password" />
            </FormField>
            <FormField>
              <Checkbox label="Remember me" />
            </FormField>
          </Form>
        </Col>
        <Col sm="1/5" />
      </Row>
    </Dialog>;
  }
}

export default Login;
