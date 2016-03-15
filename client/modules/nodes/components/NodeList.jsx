import React from 'react';

import { TreeView } from './index.jsx';
import { Alert, Button } from '../../bootstrap/components/index.jsx';

const NodeList = ({nodes}) => (
  <div>
    <p>This is where the items will be.</p>
    <Button style="default">Add Node</Button>
    <TreeView nodes={nodes} />
  </div>
);

export default NodeList;
