import React from 'react';
import ReactDOM from 'react-dom';
import {GridRow, GridColumn, Button, Form, Input, FormGroup, Label, Modal} from '../../bootstrap/components/index.jsx';

export default class Profile extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showPasswordModal: false,
      showEmailModal: false,
      showUsernameModal: false
    };
  };

  changePassword(){
    this.props.change_password(
      ReactDOM.findDOMNode(this.refs.oldPassword).value,
      ReactDOM.findDOMNode(this.refs.newPassword).value
    );
    this.togglePasswordModal();
  }

  changeEmail(){
    this.props.change_email(
      ReactDOM.findDOMNode(this.refs.email).value
    );
    this.toggleEmailModal();
  }

  changeUsername(){
    this.props.change_username(
      ReactDOM.findDOMNode(this.refs.username).value
    );
    this.toggleUsernameModal();
    this.forceUpdate();
  }

  update(event){
    let user = {};
    user[event.target.name] = event.target.value;
    this.props.update(user);
  }

  togglePasswordModal(event){
    this.setState({showPasswordModal: !this.state.showPasswordModal});
  }

  toggleEmailModal(event){
    this.setState({showEmailModal: !this.state.showEmailModal});
  }

  toggleUsernameModal(event){
    this.setState({showUsernameModal: !this.state.showUsernameModal});
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
          type="text"
          name="profile.firstname"
          onChange={this.update.bind(this)}
          defaultValue={user.profile.firstname} />
        </FormGroup>
        <FormGroup>
          <Label>Lastname</Label>
          <Input
          style="input"
          type="text"
          name="profile.lastname"
          onChange={this.update.bind(this)}
          defaultValue={user.profile.lastname} />
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
          style="input"
          name="username"
          type="text"
          defaultValue={user.username}
          disabled="true" />
        </FormGroup>
        <p><Button style="primary" onClick={this.toggleUsernameModal.bind(this)}>Change username</Button></p>
        <FormGroup>
          <Label>Email Address</Label>
          <Input
          style="input"
          name="email"
          type="email"
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
        showModal={this.state.showUsernameModal}
        title="Change username"
        onCancel={this.toggleUsernameModal.bind(this)}
        cancelLabel="Cancel"
        onConfirm={this.changeUsername.bind(this)}
        confirmLabel="Save">
        <FormGroup>
          <Label>New username</Label>
          <Input
          ref="username"
          style="input"
          name="username"
          type="text"
          required={ true } />
        </FormGroup>
        </Modal>

        <Modal
        showModal={this.state.showEmailModal}
        title="Change email"
        onCancel={this.toggleEmailModal.bind(this)}
        cancelLabel="Cancel"
        onConfirm={this.changeEmail.bind(this)}
        confirmLabel="Save">
        <FormGroup>
          <Label>New email</Label>
          <Input
          ref="email"
          style="input"
          name="email"
          type="email"
          required={ true } />
        </FormGroup>
        </Modal>

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
