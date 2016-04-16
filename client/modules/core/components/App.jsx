import React from 'react';
import { GridRow, GridColumn, PageHeader, Navbar } from '../../bootstrap/components/index.jsx';
import { PublicNavigation, AuthenticatedNavigation } from '../containers/index.js';
import Notifications from 'react-notify-toast';

const App = ({content}) => (
  <div className="app-root container">
    <Notifications />
    { Meteor.userId() ? <AuthenticatedNavigation /> : <PublicNavigation /> }
    {content()}
  </div>
);

export default App;
