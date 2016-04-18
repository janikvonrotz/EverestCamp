import React from 'react';
import ReactDOM from 'react-dom';

import {Alert, Button, GridRow, GridColumn, Form, Input, FormGroup, Label, PageHeader} from '../../bootstrap/components/index.jsx';

export default class ResetPassword extends React.Component {
  render() {
    return(
      <GridRow className="reset-password">
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Reset Password</PageHeader>
        <Alert style="info">
        To reset your password, enter a new one below. You will be logged in with your new password.
        </Alert>
        <Form onSubmit={this.reset_password.bind(this)}>
          <FormGroup>
            <Label>New Password</Label>
            <Input
            ref="password"
            style="input"
            name="password"
            type="password"
            required={ true } />
          </FormGroup>
          <FormGroup>
            <Label>Repeat New Password</Label>
            <Input
            ref="repeatPassword"
            style="input"
            name="repeatPassword"
            type="password"
            required={ true } />
          </FormGroup>
          <FormGroup>
            <Button style="success" type="submit">Save</Button>
          </FormGroup>
        </Form>
      </GridColumn>
      </GridRow>
    );
  }

  reset_password(event){
    this.props.reset_password(this.props.token,
      ReactDOM.findDOMNode(this.refs.password).value,
      ReactDOM.findDOMNode(this.refs.repeatPassword).value);
  }
}
