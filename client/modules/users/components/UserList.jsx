import React from 'react';
import {Alert, GridColumn, GridRow, Modal, Table, Select} from '../../bootstrap/components/index.jsx';

export default class UserList extends React.Component {

  update(userId, event){
    let field = {};
    field[event.target.name] = [event.target.value];
    this.props.update(field, userId);
  }

  renderCell(header, value, callback, itemId){
    if (header === 'role') {
      return (<Select name="roles" onChange={callback.bind(this, itemId)} options={Meteor.settings.public.roles} defaultValue={value} />);
    }
    return value;
  }

  render() {
    return (
      <div className="user-list">
        <Table callback={this.update.bind(this)} headers={["id", "name", "username", "role"]} items={this.props.users} renderCell={this.renderCell} />
      </div>
    );
  }
}
