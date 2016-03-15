import React from 'react';

import { TreeView } from './Nodes.jsx';
import { Alert, Button } from '../../bootstrap/components/Bootstrap.jsx';

const NodeList = ({nodes}) => (
  <div>
    <p>This is where the items will be.</p>
    <Button style="default">Add Node</Button>
    <TreeView nodes={nodes} />
  </div>
);

export default NodeList;
