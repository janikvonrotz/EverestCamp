import React from 'react';

import {
  GridColumn,
  Input,
  FormGroup
} from '../../bootstrap/components/index.jsx';
import { TreeView, NodeInsert, NodeEdit } from '../../nodes/containers';
import { PostInsert } from '../../posts/containers';

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {filterText: ''};
  }

  render(){
    return(
      <GridColumn>
        <p>This is where the items will be.</p>
        <NodeInsert nodeId={this.props.nodeId} />
        <PostInsert nodeId={this.props.nodeId} />
        <FormGroup>
          <Input
          style="input"
          type="text"
          name="search"
          placeholder="Search"
          onChange={ this.filterList.bind(this) }
          defaultValue="" />
        </FormGroup>
        <TreeView activeNodeId={this.props.nodeId} filterText={this.state.filterText} />
        <NodeEdit nodeId={this.props.nodeId} />
      </GridColumn>
    );
  }

  filterList(event){
    this.setState({
      filterText: event.target.value
    });
  }
}
