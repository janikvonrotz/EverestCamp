import React from 'react';
import ReactDOM from 'react-dom';

import {
  Alert,
  Button,
  GridRow,
  GridColumn,
  Form,
  Input,
  FormGroup,
  Label,
  PageHeader
} from '../../bootstrap/components/index.jsx';

export default class RecoverPassword extends React.Component {
  render() {
    return(
      <GridRow>
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Recover Password</PageHeader>
        <Alert style="info">
        Enter your email address below to receive a link to reset your password.
        </Alert>
        <Form onSubmit={this.recover_password.bind(this)}>
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
            <Button style="success" type="submit">Recover</Button>
          </FormGroup>
        </Form>
      </GridColumn>
      </GridRow>
    );
  }

  recover_password(event){
    this.props.recover_password(ReactDOM.findDOMNode(this.refs.email).value);
  }
}
