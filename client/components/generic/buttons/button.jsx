Button = React.createClass({
  render() {
    if ( this.props.href ) {
      return <a href={ this.props.href } className={ `btn btn-${ this.props.style } ` + this.props.className }>
        { this.props.children }
      </a>;
    } else {
      return <button
        type={ this.props.type }
        className={ `btn btn-${ this.props.style } ` + this.props.className }
        onClick={ this.props.onClick }
        aria-label={ this.props.ariaLabel} >
        { this.props.children }
      </button>;
    }
  }
});
