import React from 'react';

import {
  Alert,
  GridRow,
  GridColumn,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  PageHeader
} from '../../bootstrap/components/index.jsx';

export default class EmailVerification extends React.Component {

  render() {
    return(
      <GridRow className="email-verification">
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Email Verification</PageHeader>
        {this.renderVerification()}
      </GridColumn>
      </GridRow>
    );
  }

  renderVerification(){
    if(this.props.token){
      let result = this.props.verify(this.props.token);
      console.log(result);
      if(result){
        return(
          <Alert style="success">Your email has been verified.</Alert>
        );
      }else{
        return(
          <GridColumn>
          <Alert style="danger">Email could not be verified.</Alert>
          <Button style="success" onClick={this.send_verification_mail.bind(this)}>Resend Email</Button>
          </GridColumn>
        );
      }
    }else{
      return(
        <GridColumn>
        <Alert style="info">Please check your email account for a verification email.</Alert>
        <Button style="success" onClick={this.send_verification_mail.bind(this)}>Resend Email</Button>
        </GridColumn>
      );
    }
  }

  send_verification_mail(event){
    this.props.send();
  }
}
