import React from 'react';
import {PageHeader} from '../../bootstrap/components/index.jsx';

export default class NotFound extends React.Component {

  render() {
    return (
      <div class="container">
        <PageHeader tag="h1">Page Not Found</PageHeader>
        <p>Lorem ipsum some text.</p>
      </div>
    );
  }
}
