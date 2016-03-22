import React from 'react';

import { GridRow, GridColumn, PageHeader, Navbar } from '../../bootstrap/components/index.jsx';
import { PublicNavigation, AuthenticatedNavigation } from '../containers/index.js';
import Notifications from 'react-notify-toast';

const App = ({content}) => (
  <div className="app-root">
    <Notifications />
    { Meteor.userId() ? <AuthenticatedNavigation /> : <PublicNavigation /> }
    <div className="row-fluid container">
      <GridColumn className="col-md-12">
        {content()}
      </GridColumn>
    </div>
  </div>
);

export default App;
