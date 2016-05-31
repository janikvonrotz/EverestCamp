import React from 'react';
import {Alert, GridColumn, GridRow, Modal, Table, Select} from '../../bootstrap/components/index.jsx';

export default class UserList extends React.Component {

  renderCell(header, value){
    if (header === 'role') {
      value = 'Dropdown';
    }
    return value;
  }

  render() {
    return (
      <div className="user-list">
        <Select options={Meteor.settings.public.roles} defaultValue="Manager" />
        <Table headers={["id", "name", "username", "role"]} items={this.props.users} renderCell={this.renderCell} />
      </div>
    );
  }
}
