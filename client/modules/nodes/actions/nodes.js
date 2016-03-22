export default {

  insert({Meteor, FlowRouter}, node) {
    Meteor.call('nodes.insert', node, (err, res) => {
      if (err) {
        alert(err);
      }
      FlowRouter.go(`/nodes/${res}/edit`);
    });
  },

  update({Meteor, FlowRouter}, node) {
    Meteor.call('nodes.update', node, (err) => {
      if (err) {
        alert(err);
      }
    });
  },

  update_parent({Meteor, FlowRouter}, nodeId, parentId) {
    Meteor.call('nodes.update_parent', nodeId, parentId, (err) => {
      if (err) {
        alert(err);
      }
    });
  },

  remove({Meteor, FlowRouter}, node) {
    Meteor.call('nodes.remove', node, (err) => {
      if (err) {
        alert(err);
      }else{
        FlowRouter.go(`/nodes/`);
      }
    });
  }
};
