import React from 'react';

import {
  GridColumn,
  Input,
  // FormControl,
  FormGroup
} from '../../bootstrap/components/index.jsx';
// import { TreeView } from '../containers/index.js'
import { NodeInsert, NodeEdit, TreeView } from '../containers/index.js'

class NodeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {filterText: ''};
  }

  render(){
    return(
      <GridColumn>
        <p>This is where the items will be.</p>
        <NodeInsert nodeId={this.props.nodeId} />
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

export default NodeList;
