PostsIndex = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let query = {};
    Meteor.subscribe( 'postsIndex' );

    return {
      posts: Posts.find( query, { sort: { updated: -1 } } ).fetch()
    };
  },
  renderHeader() {
      return <Jumbotron className="blog-header">
        <h2>Everestcamp</h2>
        <h4>Where the knowledge stays.</h4>
      </Jumbotron>;
  },
  renderPosts() {
    if ( this.data.posts.length > 0 ) {
      return this.data.posts.map( ( post ) => {
        return <Post key={ post._id } post={ post } />;
      });
    } else {
      return <WarningAlert>No posts found.</WarningAlert>;
    }
  },
  render() {
    return <div className="posts">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
          { this.renderHeader() }
          { this.renderPosts() }
        </GridColumn>
      </GridRow>
    </div>;
  }
});
