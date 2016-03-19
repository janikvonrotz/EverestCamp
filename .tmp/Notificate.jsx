import React from 'react';
import Alert from './index.jsx';

export default class Notificate extends React.Component {
  render() {
    return(
      <Alert style="danger" className='notificate'>{error}</Alert>
    );
  }
}
