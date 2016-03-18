const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/posts', {
  name: 'posts',
  action() {
    ReactLayout.render( App, { yield: <MainPage /> } );
  }
});

authenticatedRoutes.route( '/posts/:_id/edit', {
  name: 'postEdit',
  action( params ) {
    ReactLayout.render( App, { yield: <MainPage postId={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/nodes', {
  name: 'nodes',
  action() {
    ReactLayout.render( App, { yield: <MainPage /> } );
  }
});

authenticatedRoutes.route( '/nodes/:_id/edit', {
  name: 'nodeEdit',
  action( params ) {
    ReactLayout.render( App, { yield: <MainPage nodeId={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/files', {
  name: 'files',
  action() {
    ReactLayout.render( App, { yield: <FilesList /> } );
  }
});

authenticatedRoutes.route( '/files/:_id/edit', {
  name: 'fileEdit',
  action( params ) {
    ReactLayout.render( App, { yield: <FileEdit fileId={ params._id } /> } );
  }
});
