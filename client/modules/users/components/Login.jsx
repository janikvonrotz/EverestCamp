import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Button, GridRow, GridColumn, Form, Input, FormGroup, Label, PageHeader} from '../../bootstrap/components/index.jsx';

export default class Login extends React.Component {
  render() {
    return(
      <GridRow className="login">
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Login</PageHeader>
        <Alert style="info">
          To access the demo, you can use the email address <strong>admin@ec.com</strong> and the password <strong>password</strong>.
        </Alert>
        <Form onSubmit={this.login.bind(this)}>
          <FormGroup>
            <Label>Email Address</Label>
            <Input
            ref="email"
            style="input"
            name="email"
            type="email"
            required={ true } />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
            ref="password"
            style="input"
            name="password"
            type="password"
            required={ true } />
            <small><a href="/recover-password">Forgot Password?</a></small>
          </FormGroup>
          <FormGroup>
            <Button style="success" type="submit">Login</Button>
          </FormGroup>
        </Form>
        <p>Don't have an account? <a href="/register">Register</a>.</p>
      </GridColumn>
      </GridRow>
    );
  }

  login(event){
    this.props.login(ReactDOM.findDOMNode(this.refs.email).value, ReactDOM.findDOMNode(this.refs.password).value);
  }
}
