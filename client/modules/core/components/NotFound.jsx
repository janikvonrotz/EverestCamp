import React from 'react';
import {PageHeader} from '../../bootstrap/components/index.jsx';

export default class NotFound extends React.Component {

  render() {
    return (
      <div className="container">
        <PageHeader tag="h1">Page Not Found</PageHeader>
        <p>We couldn't find the page you are looking for. Please use the <a href="/">search</a>.</p>
      </div>
    );
  }
}
