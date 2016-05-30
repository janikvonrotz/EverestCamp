import React from 'react';
import {Alert, GridColumn, GridRow, Modal, Table} from '../../bootstrap/components/index.jsx';

export default class UserList extends React.Component {

  render() {
    return (
      <Table headers={["id","name"]} items={this.props.users} />
    );
  }
}
