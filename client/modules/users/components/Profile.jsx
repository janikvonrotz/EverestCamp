import React from 'react';
import ReactDOM from 'react-dom';
import {GridRow, GridColumn, Button, Form, Input, FormGroup, Label, Modal} from '../../bootstrap/components/index.jsx';

export default class Profile extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showPasswordModal: false,
      showEmailModal: false,
    };
  };

  changePassword(){
    this.props.change_password(
      ReactDOM.findDOMNode(this.refs.oldPassword).value,
      ReactDOM.findDOMNode(this.refs.newPassword).value
    );
  }

  update(event){

  }

  togglePasswordModal(event){
    this.setState({showPasswordModal: !this.state.showPasswordModal});
  }

  toggleEmailModal(event){
    this.setState({showEmailModal: !this.state.showEmailModal});
  }

  render() {
    const user = this.props.user;
    return(
      <GridRow className="login">
      <GridColumn className="col-md-6 col-md-offset-3">
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
        </FormGroup>
        <p><Button style="primary" onClick={this.toggleEmailModal.bind(this)}>Change email</Button></p>
        <FormGroup>
          <Label>Password</Label>
          <Input
          style="input"
          name="password"
          type="password"
          defaultValue="password"
          disabled="true" />
        </FormGroup>
        <p><Button style="primary" onClick={this.togglePasswordModal.bind(this)}>Change password</Button></p>
        <Modal
        showModal={this.state.showPasswordModal}
        title="Change password"
        onCancel={this.togglePasswordModal.bind(this)}
        cancelLabel="Cancel"
        onConfirm={this.changePassword.bind(this)}
        confirmLabel="Save">
        <FormGroup>
          <Label>Old password</Label>
          <Input
          ref="oldPassword"
          style="input"
          name="oldPassword"
          type="password"
          required={ true } />
        </FormGroup>
        <FormGroup>
          <Label>New password</Label>
          <Input
          ref="newPassword"
          style="input"
          name="newPassword"
          type="password"
          required={ true } />
        </FormGroup>
        </Modal>
      </GridColumn>
      </GridRow>
    );
  }
}
