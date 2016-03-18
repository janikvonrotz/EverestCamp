Meteor.publish( 'fileEdit', (fileId) => {
  check( fileId, String );
  return Files.find( { _id: fileId } );
});
