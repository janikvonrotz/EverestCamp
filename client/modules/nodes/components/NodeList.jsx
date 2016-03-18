import React from 'react';

import { GridColumn, FormControl, FormGroup } from '../../bootstrap/components/index.jsx';
import { TreeView } from './index.jsx'
import { NodeInsert } from '../containers/index.js'

class NodeList extends React.Component {

  render(){
    return(
      <GridColumn>
        <p>This is where the items will be.</p>
        <NodeInsert nodeId={this.props.nodeId} />
        <FormGroup>
          <FormControl
          showLabel={ true }
          style="input"
          type="text"
          className=""
          name="search"
          label="Search"
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
