import React from 'react';

import {
  Button,
  GridRow,
  GridColumn,
  Form,
  FormControl,
  FormGroup,
  EmailInput,
  PasswordInput,
  PageHeader
} from '../../bootstrap/components/index.jsx';

export default class Register extends React.Component {
  render() {
    return(
      <GridRow>
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Register</PageHeader>
        <Form>
          <FormGroup>
            <FormControl
            ref="email"
            showLabel={ true }
            style="input"
            name="email"
            type="email"
            required={ false }
            label="Email Address" />
          </FormGroup>
          <FormGroup>
            <FormControl
            ref="password"
            showLabel={ true }
            style="input"
            name="password"
            type="password"
            required={ false }
            label="Password" />
          </FormGroup>
          <FormGroup>
            <Button style="success" onClick={this.register}>Register</Button>
          </FormGroup>
        </Form>
        <p>Already have an account? <a href="/login">Login</a>.</p>
      </GridColumn>
      </GridRow>
    );
  }

  register(event){
    console.log(this.refs);
    event.preventDefault();
    const {email, password} = this.refs;
    this.props.register(email.getValue(), password.getValue());
  }
}
