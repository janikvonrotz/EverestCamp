export default {

  insert({Meteor, LocalState, FlowRouter}, data) {
    const _id = Meteor.uuid();
    Meteor.call('nodes.insert', data, _id, (err) => {
      if (err) {
        return LocalState.set('nodes.ERROR', err.message);
      }
    });
    FlowRouter.go(`/nodes/${_id}/edit`);
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
