Meteor.publish( 'postsSearch', function(query){
  check(query, String);

  var options = {sort: {updated: -1}, limit: 20}

  var selector = {$or: [
    {title: {$regex: query}},
    {content: {$regex: query}}
  ]};

  return Posts.find(selector, options);
});
