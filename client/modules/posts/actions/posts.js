import {notify} from 'react-notify-toast';
import {can_access} from '/lib/access_control';

export default {

  insert({Meteor, FlowRouter}, nodeId) {
    Meteor.call( 'post.insert', {}, ( err, res ) => {
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

            Meteor.call('post.remove', {_id: postId}, (err) => {
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
    Meteor.call('post.update', post, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }
    });
  },

  remove({Meteor, FlowRouter}, post) {
    Meteor.call('post.remove', post, (err) => {
      if (err) {
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go('/posts/');
      }
    });
  },

  read({Meteor, FlowRouter}, routename, redirect) {
    if(can_access(routename)){
      redirect('/posts');
    }
  }
};
