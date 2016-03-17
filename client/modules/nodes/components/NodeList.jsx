import React from 'react';

import { GridColumn, FormControl, FormGroup } from '../../bootstrap/components/index.jsx';
import { NodeInsert, TreeView } from './index.jsx'

const NodeList = ({nodes, nodeId}) => (
  <GridColumn>
    <p>This is where the items will be.</p>
    <NodeInsert nodeId={nodeId} />
    <FormGroup>
      <FormControl
      showLabel={ true }
      style="input"
      type="text"
      className=""
      name="search"
      label="Search"
      onChange={ this.filterList }
      defaultValue="" />
    </FormGroup>
    <TreeView nodes={nodes} />
  </GridColumn>
);

export default NodeList;
