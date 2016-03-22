import {notify} from 'react-notify-toast';

export default {

  register({Meteor, LocalState}, email, password) {
    Accounts.createUser({email, password}, (err, res) => {
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
    let userId = Meteor.userId;
    Meteor.call("send_verification_email", userId, ( err ) => {
      if(err){
        notify.show(err.message, 'error');
      }else{
        FlowRouter.go("/email-verification");
      }
    });
  },
};
