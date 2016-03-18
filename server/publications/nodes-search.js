Meteor.publish( 'nodesSearch', function(query){
  check(query, String);
  if(query != undefined && query != ''){
    var filteredNodes = []
    Nodes.find({label: {$regex: query}}).fetch().map((node) => {
      filteredNodes = filteredNodes.concat(node.path)
    });
    return Nodes.find({_id: {$in: filteredNodes}}, {sort: {label: 1}});
  }else{
    return Nodes.find({}, {sort: {label: 1}});
  }
});
