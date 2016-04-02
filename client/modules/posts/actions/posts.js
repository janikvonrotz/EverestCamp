import {notify} from 'react-notify-toast';

export default {

  insert({Meteor, FlowRouter}, nodeId) {

    Meteor.call( 'posts.insert', {}, ( err, res ) => {
      if ( err ) {
        notify.show(err.message, 'error');
      } else {

        var postId = res;
        var node = {
          label: "Untitled Post",
          parent: nodeId,
          ref_id: postId,
          type: "post"
        }

        Meteor.call('nodes.insert', node, (err) => {
          if (err) {
            notify.show(err.message, 'error');

            Meteor.call('posts.remove', {_id: postId}, (err) => {
              if (err) {
                notify.show(err.message, 'error');
              }
            });
          }else{
            FlowRouter.go('/posts/' + postId + '/edit');
          }
        });
      }
    });
  },

  update({Meteor, FlowRouter}, post) {
    Meteor.call('posts.update', post, (err) => {
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
