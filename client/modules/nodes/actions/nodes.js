import {notify} from '../../core/libs/notify';
import {cannot_access, redirect_login, redirect_verify} from '/lib/access_control';

export default {

  insert({Meteor, FlowRouter}, node) {
    Meteor.call('node.insert', node, (err, res) => {
      if (err) {
        notify.show(err.message, 'error');
      } else {
        FlowRouter.go('/nodes/' + res + '/edit');
      }
    });
  },

  update({Meteor, FlowRouter}, node) {
    Meteor.call('node.update', node, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }
    });
  },

  update_parent({Meteor, FlowRouter}, nodeId, parentId) {
    Meteor.call('node.update_parent', nodeId, parentId, (err) => {
      if (err) {
          notify.show(err.message, 'error');
      }
    });
  },

  remove({Meteor, FlowRouter}, node) {
    Meteor.call('node.remove', node, (err) => {
      if (err) {
        notify.show(err.message, 'error');
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

  can_access({Meteor, FlowRouter}, routename){
    return !cannot_access(routename);
  }
};
