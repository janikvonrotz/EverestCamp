import React from 'react';
import ReactDOM from 'react-dom';
import {Button, GridRow, GridColumn, Form, Input, FormGroup, Label, PageHeader} from '../../bootstrap/components/index.jsx';

export default class Register extends React.Component {
  render() {
    return(
      <GridRow className="recover">
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Register</PageHeader>
        <Form onSubmit={this.register.bind(this)}>
          <FormGroup>
            <Label>Firstname</Label>
            <Input
            ref="firstname"
            style="input"
            name="firstname"
            required={ true } />
          </FormGroup>
          <FormGroup>
            <Label>Lastname</Label>
            <Input
            ref="lastname"
            style="input"
            name="lastname"
            required={ true } />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input
            ref="username"
            style="input"
            name="username"
            required={ true } />
          </FormGroup>
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
    let user = {
      username: ReactDOM.findDOMNode(this.refs.username).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value,
      profile:{
        firstname: ReactDOM.findDOMNode(this.refs.firstname).value,
        lastname: ReactDOM.findDOMNode(this.refs.lastname).value
      }
    }
    this.props.register(user);
  }
}
