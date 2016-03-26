import {notify} from 'react-notify-toast';

export default {

  insert({Meteor, FlowRouter}, nodeId) {
    post = {};
    Meteor.call( 'posts.insert', post, ( err, res ) => {
      if ( err ) {
        notify.show(err.message, 'error');
      } else {
        var postId = res;
        var node = {
          label: "Untitled Post",
          parent: nodeId,
          ref_id: res,
          type: "post"
        }
        console.log(node);
        Meteor.call('nodes.insert', node, (err, res) => {
          if (err) {
            notify.show(err.message, 'error');
            Meteor.call('posts.remove', {_id: postId}, (err, res) => {
              if (err) {
                notify.show(err.message, 'error');
              }
            });
          } else {
            FlowRouter.go('/posts/' + postId + '/edit');
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
