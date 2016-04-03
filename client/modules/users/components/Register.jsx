import React from 'react';
import ReactDOM from 'react-dom';

import {
  Button,
  GridRow,
  GridColumn,
  Form,
  Input,
  FormGroup,
  Label,
  PageHeader
} from '../../bootstrap/components/index.jsx';

export default class Register extends React.Component {
  render() {
    return(
      <GridRow className="recover">
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Register</PageHeader>
        <Form onSubmit={this.register.bind(this)}>
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
          </FormGroup>
          <FormGroup>
            <Button style="success" type="submit">Register</Button>
          </FormGroup>
        </Form>
        <p>Already have an account? <a href="/login">Login</a>.</p>
      </GridColumn>
      </GridRow>
    );
  }

  register(event){
    this.props.register(ReactDOM.findDOMNode(this.refs.email).value, ReactDOM.findDOMNode(this.refs.password).value);
  }
}
