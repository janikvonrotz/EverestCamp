import {cannot_access, redirect_login, redirect_verify} from '/lib/access_control';

export default {

  update({Meteor, FlowRouter, Notification}, field, userId) {
    Meteor.call( 'user.update', field, userId, ( err ) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }
    });
  },

  register({Meteor, FlowRouter, Notification}, user) {
    Accounts.createUser(user, (err, res) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        FlowRouter.go('/email-verification');
      }
    });
  },

  login({Meteor, FlowRouter, Notification}, email, password) {
    Meteor.loginWithPassword(email, password, (err, res) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        Notification.alert(1, 'You successfully logged in.', 2.5);
        FlowRouter.go('/');
      }
    });
  },

  recover_password({Meteor, FlowRouter, Notification}, email) {
    Accounts.forgotPassword( { email: email }, (err) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        Notification.alert(1, 'Email sent. Please check your mail account.', 2.5);
      }
    });
  },

  reset_password({Meteor, FlowRouter, Notification}, token, password, repeatPassword) {
    if(password != repeatPassword){
      notify.show("Passwords don't match.", 'error');
    }else{
      Accounts.resetPassword( token, password, ( err ) => {
        if(err){
          Notification.alert(3, err.message, 2.5);
        }else{
          Notification.alert(1, 'New password has been saved.', 2.5);
          FlowRouter.go('/')
        }
      });
    }
  },

  change_password({Meteor, FlowRouter, Notification}, oldPassword, newPassword) {
    Accounts.changePassword( oldPassword, newPassword, ( err ) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        Notification.alert(1, 'New password has been saved.', 2.5);
      }
    });
  },

  change_username({Meteor, FlowRouter, Notification}, username) {
    Meteor.call( 'user.update', {username: username}, ( err, res ) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        Notification.alert(1, 'New username has been saved.', 2.5);
      }
    });
  },

  change_email({Meteor, FlowRouter, Notification}, email) {
    Meteor.call( 'user.update', {email: email}, ( err ) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        Notification.alert(1, 'New email has been saved.', 2.5);
        FlowRouter.go('/email-verification');
      }
    });
  },

  verify_email({Meteor, FlowRouter, Notification}, token) {
    var result = true;
    Accounts.verifyEmail( token, ( err ) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        result = true;
      }
    });
    return result;
  },

  send_verification_email({Meteor, FlowRouter, Notification}) {
    Meteor.call('user.send_verification_email', ( err ) => {
      if(err){
        Notification.alert(3, err.message, 2.5);
      }else{
        FlowRouter.go('/email-verification');
      }
    });
  },

  access_route(routename, redirect) {
    if(redirect_login(routename)){
      redirect('/login');
    } else if(redirect_verify() && !(['user.email_verification', 'user.reset_password_with_token'].indexOf(routename) > -1)){
      redirect('/email-verification');
    } else if(cannot_access(routename)){
      redirect('/');
    }
  },

  can_access({Meteor, FlowRouter, Notification}, routename){
    return !cannot_access(routename);
  }
};
