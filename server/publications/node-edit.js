Meteor.publish( 'nodeEdit', ( nodeId ) => {
  check( nodeId, String );

  return [
    Nodes.find( { _id: nodeId } )
  ];
});
