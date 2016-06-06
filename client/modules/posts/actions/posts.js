import {cannot_access, redirect_login, redirect_verify} from '/lib/access_control';

export default {

  insert({Meteor, FlowRouter, Notification}, nodeId) {
    Meteor.call( 'post.insert', {}, ( err, res ) => {
      if ( err ) {
        Notification.alert(3, err.message, 2.5);
      } else {

        var postId = res;
        var node = {
          label: "Untitled Post",
          parent: nodeId,
          ref_id: postId,
          type: "post"
        }

        Meteor.call('node.insert', node, (err) => {
          if (err) {
            Notification.alert(3, err.message, 2.5);

            Meteor.call('post.remove', {_id: postId}, (err) => {
              if (err) {
                Notification.alert(3, err.message, 2.5);
              }
            });
          }else{
            FlowRouter.go('/posts/' + postId + '/edit');
          }
        });
      }
    });
  },

  update({Meteor, FlowRouter, Notification}, post) {
    Meteor.call('post.update', post, (err) => {
      if (err) {
        Notification.alert(3, err.message, 2.5);
      }
    });
  },

  remove({Meteor, FlowRouter, Notification}, post) {
    Meteor.call('post.remove', post, (err) => {
      if (err) {
        Notification.alert(3, err.message, 2.5);
      }else{
        FlowRouter.go('/posts/');
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
  },

  redirect_slug({Meteor, FlowRouter, Notification}, post, slug){
    if(post.slug != slug){
      FlowRouter.go('/posts/' + post._id + '/' + post.slug);
    }
  }
};
