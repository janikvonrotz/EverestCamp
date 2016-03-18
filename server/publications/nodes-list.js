Meteor.publish( 'nodesList', () => {
  return Nodes.find({}, {sort: {label: 1}});
});
