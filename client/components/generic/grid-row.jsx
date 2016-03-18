GridRow = React.createClass({
  render() {
    return <div className={classNames('row', this.props.className)}>
      { this.props.children }
    </div>;
  }
});
