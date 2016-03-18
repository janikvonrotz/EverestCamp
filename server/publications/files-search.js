Meteor.publish( 'filesSearch', (query, limit) => {
  check(query, String);
  check(limit, Number);
  var options = {sort: {uploadedAt: -1}, limit: limit}
  return Files.find({'metadata.name': {$regex: query}}, options);
});
