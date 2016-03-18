Meteor.publish( 'filesList', () => {
  return Files.find({}, {sort:{uploadedAt:-1}});
});
