import React from 'react';
import { GridColumn, GridRow, FormGroup, Input } from '../../bootstrap/components/index.jsx';
import UserList from '../containers/UserList.js';

export default class UserSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: ''
    };
  };

  filterList(event){
    this.setState({
      filterText: event.target.value
    });
  };

  render() {
    return (
      <GridRow class="user-search">
        <GridColumn className="col-md-12 clearfix">
          <FormGroup className="pull-xs-right">
            <Input
            name="search"
            placeholder="Search"
            onChange={this.filterList.bind(this)} />
          </FormGroup>
        </GridColumn>
        <GridColumn className="col-md-12">
          <UserList filterText={this.state.filterText}/>
        </GridColumn>
      </GridRow>
    );
  }
}
