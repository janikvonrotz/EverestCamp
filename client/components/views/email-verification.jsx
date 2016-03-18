EmailVerification = React.createClass({
  renderEmailVerification() {
    if(this.props.token){
      return <p>Your email has been verified.</p>
    }else{
      return <p>Please check your email account for a verification email.</p>
    }
  },
  render() {
    return <GridRow>
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader size="h4" label="Email verification" />
        {this.renderEmailVerification()}
      </GridColumn>
    </GridRow>;
  }
});
