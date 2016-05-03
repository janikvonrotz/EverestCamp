import {notify} from '../../core/libs/notify';

export default {

  update({Meteor, LocalState}, field) {
    Meteor.call( 'user.update', field, ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }
    });
  },

  register({Meteor, LocalState}, user) {
    Accounts.createUser(user, (err, res) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go('/email-verification');
      }
    });
  },

  login({Meteor, LocalState}, email, password) {
    Meteor.loginWithPassword(email, password, (err, res) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        notify.show("You successfully logged in.", 'success');
        FlowRouter.go('/');
      }
    });
  },

  recover_password({Meteor, LocalState}, email) {
    Accounts.forgotPassword( { email: email }, (err) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        notify.show("Email sent. Please check your mail account.", 'success');
      }
    });
  },

  reset_password({Meteor, LocalState}, token, password, repeatPassword) {
    if(password != repeatPassword){
      notify.show("Passwords don't match.", 'error');
    }else{
      Accounts.resetPassword( token, password, ( err ) => {
        if(err){
          notify.show(err.message, 'error');
        }else{
          notify.show("New password has been saved.", 'success');
          FlowRouter.go("/login");
        }
      });
    }
  },

  change_password({Meteor, LocalState}, oldPassword, newPassword) {
    Accounts.changePassword( oldPassword, newPassword, ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        notify.show("New password has been saved.", 'success');
      }
    });
  },

  change_username({Meteor, LocalState}, username) {
    Meteor.call( 'user.update', {username: username}, ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        notify.show("New username has been saved.", 'success');
      }
    });
  },

  change_email({Meteor, LocalState}, email) {
    Meteor.call( 'user.update', {email: email}, ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        notify.show("New email has been saved.", 'success');
        FlowRouter.go("/email-verification");
      }
    });
  },

  verify_email({Meteor, LocalState}, token) {
    var result = true;
    Accounts.verifyEmail( token, ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        result = true;
      }
    });
    return result;
  },

  send_verification_email({Meteor, LocalState}) {
    Meteor.call("user.send_verification_email", ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go("/email-verification");
      }
    });
  },
};
