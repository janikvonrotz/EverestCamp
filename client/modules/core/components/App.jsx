import React from 'react';

import { GridRow, GridColumn, PageHeader, Navbar } from '../../bootstrap/components/index.jsx';
import { PublicNavigation, AuthenticatedNavigation } from '../containers/index.js';

const App = ({content}) => (
  <div className="app-root">
    <Navbar id="app-header" brandLink="/" brand="EverestCamp">
      <PublicNavigation />
    </Navbar>
    <div className="row-fluid container">
      <GridColumn className="col-md-12">
        {content()}
      </GridColumn>
    </div>
  </div>
);

export default App;
