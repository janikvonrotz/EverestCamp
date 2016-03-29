import {notify} from 'react-notify-toast';

export default {

  insert({Meteor, FlowRouter}, nodeId) {
    post = {};
    Meteor.call( 'posts.insert', post, nodeId, ( err, res ) => {
      if ( err ) {
        notify.show(err.message, 'error');
      } else {
        FlowRouter.go('/posts/' + res + '/edit');
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

  remove({Meteor, FlowRouter}, post) {
    Meteor.call('posts.remove', post, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go('/posts/');
      }
    });
  }
};
