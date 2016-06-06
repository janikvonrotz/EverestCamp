import {cannot_access, redirect_login, redirect_verify} from '/lib/access_control';

export default {

  insert({Meteor, FlowRouter, Notification}, node) {
    Meteor.call('node.insert', node, (err, res) => {
      if (err) {
        Notification.alert(3, err.message, 2.5);
      } else {
        FlowRouter.go('/nodes/' + res + '/edit');
      }
    });
  },

  update({Meteor, FlowRouter, Notification}, node) {
    Meteor.call('node.update', node, (err) => {
      if (err) {
        Notification.alert(3, err.message, 2.5);
      }
    });
  },

  update_parent({Meteor, FlowRouter, Notification}, nodeId, parentId) {
    Meteor.call('node.update_parent', nodeId, parentId, (err) => {
      if (err) {
          Notification.alert(3, err.message, 2.5);
      }
    });
  },

  remove({Meteor, FlowRouter, Notification}, node) {
    Meteor.call('node.remove', node, (err) => {
      if (err) {
        Notification.alert(3, err.message, 2.5);
      }else{
        FlowRouter.go('/nodes/');
      }
    });
  },

  access_route(routename, redirect) {
    if(redirect_login(routename)){
      redirect('/login');
    } else if(redirect_verify()){
      redirect('/email-verification');
    } else if(cannot_access(routename)){
      redirect('/');
    }
  },

  can_access({Meteor, FlowRouter, Notification}, routename){
    return !cannot_access(routename);
  }
};
