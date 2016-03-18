GridColumn = React.createClass({
  render() {
    return <div
      className={ this.props.className }
      key={ this.props.key}
    >
      { this.props.children }
    </div>;
  }
});
