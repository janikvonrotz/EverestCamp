import React from 'react';

import {
  GridColumn,
  Input,
  // FormControl,
  FormGroup
} from '../../bootstrap/components/index.jsx';
import { TreeView } from './index.jsx'
import { NodeInsert } from '../containers/index.js'

class NodeList extends React.Component {

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
        <TreeView nodes={this.props.nodes} activeNodeId={this.props.nodeId} />
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
