import React from 'react';

export default class Form extends React.Component {

  handleSubmit( event ) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        ref="form"
        id={ this.props.id }
        className={ this.props.className }
        onSubmit={ this.handleSubmit }>
        { this.props.children }
      </form>
    );
  }
}
