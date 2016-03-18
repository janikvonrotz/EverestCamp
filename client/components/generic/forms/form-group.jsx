FormGroup = React.createClass({
  render() {
    return <div className={classNames("form-group", this.props.className)}>
      { this.props.children }
    </div>;
  }
});
