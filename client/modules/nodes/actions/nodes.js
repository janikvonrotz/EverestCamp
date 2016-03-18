export default {

  insert({Meteor, LocalState, FlowRouter}, data) {
    Meteor.call('nodes.insert', data, (err, res) => {
      if (err) {
        return LocalState.set('nodes.ERROR', err.message);
      }
      console.log(res)
      FlowRouter.go(`/nodes/${res}/edit`);
    });

  },

  update({Meteor, LocalState, FlowRouter}, data, _id) {

    Meteor.call('nodes.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('nodes.ERROR', err.message);
      }
    });
  },

  remove({Meteor, LocalState, FlowRouter}, _id) {

    Meteor.call('nodes.remove', _id, (err) => {
      if (err) {
        return LocalState.set('nodes.ERROR', err.message);
      }
      FlowRouter.go(`/nodes/`);

    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('nodes.ERROR', null);
  }

};
