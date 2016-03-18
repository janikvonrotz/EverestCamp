PostsList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'postsList' );

    return {
      posts: Posts.find().fetch().map( ( post ) => {
        return { _id: post._id, href: `/posts/${ post._id }/edit`, label: post.title };
      })
    };
  },
  handleNewPost() {
    Meteor.call( 'newPost', ( error, postId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/posts/${ postId }/edit` );
        Bert.alert( 'All set! Get to typin\'', 'success' );
      }
    });
  },
  renderPostsList() {
    if ( this.data.posts.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.posts } />;
    } else {
      return <WarningAlert>No posts found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <GridColumn className="col-md-6 col-md-offset-3">
        <Button style="success" onClick={ this.handleNewPost }>New Post</Button>
        <PageHeader size="h4" label="Posts" />
        { this.renderPostsList() }
      </GridColumn>
    </GridRow>;
  }
});
