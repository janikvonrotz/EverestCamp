ButtonGroup = React.createClass({
  render() {
    return <div className={classNames("btn-group", this.props.className)} role="group">
      { this.props.children }
    </div>;
  }
});
