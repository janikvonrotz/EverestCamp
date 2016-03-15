import React from 'react';

import { Alert } from '../../bootstrap/components/Bootstrap.jsx';

const NodeList = ({nodes}) => (
  <div>
    <p>This is where the items will be.</p>
    <Alert style="warning">No nodes found.</Alert>
  </div>
);

export default NodeList;
