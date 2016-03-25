import {notify} from 'react-notify-toast';

export default {

  insert({Meteor, FlowRouter}, node) {
    Meteor.call('nodes.insert', node, (err, res) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        FlowRouter.go('/nodes/' + res + '/edit');
      }
    });
  },

  update({Meteor, FlowRouter}, node) {
    Meteor.call('nodes.update', node, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }
    });
  },

  update_parent({Meteor, FlowRouter}, nodeId, parentId) {
    Meteor.call('nodes.update_parent', nodeId, parentId, (err) => {
      if (err) {
          notify.show(err.message, 'error');
      }
    });
  },

  remove({Meteor, FlowRouter}, node) {
    Meteor.call('nodes.remove', node, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go('/nodes/');
      }
    });
  }
};
