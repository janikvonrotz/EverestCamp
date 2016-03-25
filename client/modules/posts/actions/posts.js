import {notify} from 'react-notify-toast';

export default {

  insert({Meteor, FlowRouter}, nodeId) {
    Meteor.call( 'posts.insert', ( err, res ) => {
      if ( err ) {
        notify.show(err.message, 'error');
      } else {
        var node = {
          label: "Untitled Post",
          parent: nodeId,
          ref_id: res,
          type: "post"
        }
        Meteor.call('nodes.insert', node, (err, res) => {
          if (err) {
            notify.show(err.message, 'error');
          } else {
            FlowRouter.go('/posts/' + res + '/edit');
          }
        });
      }
    });
  },

  update({Meteor, FlowRouter}, node) {
    Meteor.call('posts.update', node, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }
    });
  },

  remove({Meteor, FlowRouter}, node) {
    Meteor.call('posts.remove', node, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go(`/posts/`);
      }
    });
  }
};
