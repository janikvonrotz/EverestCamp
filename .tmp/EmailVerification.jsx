import React from 'react';

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

export default class EmailVerification extends React.Component {
  render() {
    return(
      <GridRow>
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader tag="h1">Email Verification</PageHeader>

      </GridColumn>
      </GridRow>
    );
  }

  verificate(event){
    console.log(this.refs);
    this.props.verificate();
  }
}
