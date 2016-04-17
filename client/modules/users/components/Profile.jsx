import React from 'react';
import ReactDOM from 'react-dom';
import {GridRow, GridColumn, Button, Form, Input, FormGroup, Label, Modal} from '../../bootstrap/components/index.jsx';

export default class Profile extends React.Component {
  render() {
    const user = this.props.user;
    return(
      <GridRow className="login">
      <GridColumn className="col-md-6 col-md-offset-3">
        <Form>
        <FormGroup>
          <Label>Firstname</Label>
          <Input
          style="input"
          name="profile.firstname"
          defaultValue={user.profile.firstname} />
        </FormGroup>
        <FormGroup>
          <Label>Lastname</Label>
          <Input
          style="input"
          name="profile.lastname"
          defaultValue={user.profile.lastname} />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
          style="input"
          name="username"
          defaultValue={user.username} />
        </FormGroup>
        <FormGroup>
          <Label>Email Address</Label>
          <Input
          style="input"
          name="email"
          defaultValue={user.emails[0].address}
          disabled="true" />
          <Button style="primary">Change email</Button>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
          style="input"
          name="password"
          type="password"
          defaultValue="password"
          disabled="true" />
        </FormGroup>
        <Button style="primary">Change password</Button>
        </Form>
      </GridColumn>
      </GridRow>
    );
  }

  update(event){

  }
}
