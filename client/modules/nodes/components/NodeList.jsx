import React from 'react';

import { TreeView, NodeInsert } from './index.jsx';
import { Alert, Button, Notificate, FormGroup, FormControl } from '../../bootstrap/components/index.jsx';

const NodeList = ({nodes, nodeId}) => (
  <div>
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
  </div>
);

export default NodeList;
