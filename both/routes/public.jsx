const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( App, { yield: <PostsIndex /> } );
  }
});

publicRoutes.route( '/posts/:_id/:slug', {
  name: 'postItem',
  action( params ) {
    ReactLayout.render( App, { yield: <PostItem postId={ params._id} slug={ params.slug } /> } );
  }
});

publicRoutes.route( '/register', {
  name: 'register',
  action() {
    ReactLayout.render( App, { yield: <Register /> } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    ReactLayout.render( App, { yield: <Login /> } );
  }
});

publicRoutes.route( '/email-verification/', {
  name: 'emailVerification',
  action() {
    ReactLayout.render( App, { yield: <EmailVerification/> } );
  }
});

publicRoutes.route( '/email-verification/:token', {
  name: 'emailVerificationWithToken',
  action(params) {
    ReactLayout.render( App, { yield: <EmailVerification token={ params.token }/> } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recoverPassword',
  action() {
    ReactLayout.render( App, { yield: <RecoverPassword /> } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'resetPassword',
  action( params ) {
    ReactLayout.render( App, { yield: <ResetPassword token={ params.token } /> } );
  }
});
