Meteor.publish( 'postItem', ( postId ) => {
  check( postId, String );

  return Posts.find( { _id: postId } );
});
