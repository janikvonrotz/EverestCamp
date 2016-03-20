import React from 'react';

export default class Form extends React.Component {

  handleSubmit( event ) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form
        ref="form"
        id={ this.props.id }
        className={ this.props.className }
        onSubmit={ this.handleSubmit.bind(this) }>
        { this.props.children }
      </form>
    );
  }
}
