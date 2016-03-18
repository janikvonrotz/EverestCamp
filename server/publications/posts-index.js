Meteor.publish( 'postsIndex', function() {
  return Posts.find( { public: true } );
});

// Meteor.publish( 'tagsIndex', function( tag ) {
//   check( tag, String );
//   return Posts.find( { published: true, tags: { $in: [ tag ] } } );
// });
