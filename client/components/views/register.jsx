Register = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address legit?'
        },
        password: {
          required: 'Need a password here.'
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers;

        let form  = component.refs.loginForm.refs.form
        var user = {
          email: getValue( form, '[name="emailAddress"]' ),
          password: getValue( form, '[name="password"]' )
        }

        Meteor.call('newUser', user, (error, user) => {
            if ( error ) {
              Bert.alert( error.reason, 'danger' );
            } else {
              Bert.alert( 'Verification email has been sent!', 'success' );
              FlowRouter.go("/email-verification");
            }
        });
      }
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return <GridRow>
      <GridColumn className="col-md-6 col-md-offset-3">
        <PageHeader size="h4" label="Register" />
        <Form ref="loginForm" id="login" className="login" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput ref="emailAddress" showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <PasswordInput ref="password" showLabel={ true }/>
          </FormGroup>
          <FormGroup>
            <Button style="success" type="submit">Register</Button>
          </FormGroup>
        </Form>
        <p>Already have an account? <a href="/login">Login</a>.</p>
      </GridColumn>
    </GridRow>;
  }
});
