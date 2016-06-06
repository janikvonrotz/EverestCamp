import React from 'react';
import { GridRow, GridColumn, PageHeader, Navbar } from '../../bootstrap/components/index.jsx';
import { PublicNavigation, AuthenticatedNavigation } from '../containers/index.js';
import Helmet from 'react-helmet';
import 'notie/dist/notie.css';

export default class App extends React.Component {

  render(){
    return(
      <div className="app-root container">
        <Helmet title="EverestCamp"
        meta={[
          {"name": "viewport", "content": "width=device-width, initial-scale=1"}
        ]} />
        { Meteor.userId() ? <AuthenticatedNavigation /> : <PublicNavigation /> }
        {this.props.content()}
      </div>
    );
  }
}
