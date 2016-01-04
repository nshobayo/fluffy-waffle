import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import { Row, Col, Form, FormField, FormInput, Checkbox, Button } from 'elemental'
import RaisedButton from 'material-ui/lib/raised-button';

import Card from 'material-ui/lib/card/card'
import CardMedia from 'material-ui/lib/card/card-media'
import CardTitle from 'material-ui/lib/card/card-title'
import CardText from 'material-ui/lib/card/card-text'
import CardActions from 'material-ui/lib/card/card-actions'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import TopBar from './topbar';

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

    {/* <div className="row pad-medium">
        <Card initiallyExpanded={true}>
          <CardText>
            <h2 className="compact-heading" style={{textAlign: 'center'}}>
              Sign into Glassroom
            </h2>
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
          </CardText>
          <CardActions expandable={true}>
            <div className="row">
              <Link to={"/schedule"}>
                <FlatButton label="Login" className="right" />
              </Link>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>*/}

    var loginButtonStyle={height: '48px', width: '50%', maxWidth: '320px'};
    var loginLabelStyle={color: 'white', height: '48px'};

    return <div style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: 'url("https://placeimg.com/480/640/arch")', height: '100vh'}}>
      <TopBar title='Log In or Sign Up' />
      <br />
      <h1 style={{
        lineHeight: '50vh',
        fontSize: '3.6rem',
        textShadow: '0px 0px 30px rgba(50, 50, 50, 0.2)',
        color: 'white',
        textAlign: 'center',
        fontFamily: "'Vampiro One', cursive"}}
      >
        Glassroom
      </h1>
      <br />
      <div className="row pad-medium center">
        <Link to={"/auth/facebook"}>
          <RaisedButton
            style={loginButtonStyle}
            labelStyle={loginLabelStyle}
            className="row pad-medium"
            backgroundColor="#3b5998"
            label="Log in with Facebook" />
        </Link>
      </div>
      <div className="row pad-medium center">
        <Link to={"/auth/google"}>
          <RaisedButton
            style={loginButtonStyle}
            labelStyle={loginLabelStyle}
            className="row pad-medium"
            backgroundColor="#d34836"
            label="Continue with Google" />
        </Link>
      </div>
    </div>;
  }
}

export default Login;
