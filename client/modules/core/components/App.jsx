import React from 'react';

import { Alert, GridRow, GridColumn, PageHeader } from '../../bootstrap/components/index.jsx';

const App = ({content}) => (
  <GridRow className="container">
    <GridColumn className="col-md-12">
      <PageHeader tag="h1">Impossible List</PageHeader>
    </GridColumn>
    <GridColumn className="col-md-12">
      {content()}
    </GridColumn>
  </GridRow>
);

export default App;
