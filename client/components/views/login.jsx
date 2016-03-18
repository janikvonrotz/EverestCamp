Login = React.createClass({
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

        let form  = component.refs.loginForm.refs.form,
        email = getValue( form, '[name="emailAddress"]' ),
        password = getValue( form, '[name="password"]' );

        Meteor.loginWithPassword( email, password, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Logged in!', 'success' );
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
        <PageHeader size="h4" label="Log In" />
        <InfoAlert>
          To access the demo, you can use the email address <strong>admin@admin.com</strong> and the password <strong>password</strong>.
        </InfoAlert>
        <Form ref="loginForm" id="login" className="login" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput ref="emailAddress" showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <PasswordInput ref="password" showLabel={ true }/>
            <small><a href="/recover-password">Forget Password?</a></small>
          </FormGroup>
          <FormGroup>
            <Button style="success" type="submit">Login</Button>
          </FormGroup>
        </Form>
        <p>Don't have an account? <a href="/register">Register</a>.</p>
      </GridColumn>
    </GridRow>;
  }
});
