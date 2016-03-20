export default {

  register({Meteor, LocalState}, email, password) {
    Accounts.createUser({email, password}, (err, res) => {
      if(err){
        alert('Register.jsx: ' + err);
      }else{
        FlowRouter.go('/email-verification');
      }
    });
  },

  login({Meteor, LocalState}, email, password) {
    Meteor.loginWithPassword(email, password, (err, res) => {
      if(err){
        alert('Login.jsx: ' + err);
      }else{
        FlowRouter.go('/');
      }
    });
  },

  recover_password({Meteor, LocalState}, email) {
    Accounts.forgotPassword( { email: email }, (err) => {
      if(err){
        alert('Login.jsx: ' + err);
      }else{
        alert("RecoverPassword.jsx: check mail");
      }
    });
  },

  reset_password({Meteor, LocalState}, token, password, repeatPassword) {
    if(password != repeatPassword){
      alert("ResesetPassword.jsx: password does not match!");
    }else{
      Accounts.resetPassword( token, password, ( err ) => {
        if(err){
          alert('ResetPassword.jsx: ' + err);
        }else{
          alert("ResetPassword.jsx: success");
          FlowRouter.go("/login");
        }
      });
    }
  },

  verify_email({Meteor, LocalState}, token) {
    var result = true;
    Accounts.verifyEmail( token, ( err ) => {
      if(err){
        alert('EmailVerification.jsx: ' + err);
      }else{
        result = true;
        alert("EmailVerification.jsx: success verify");
      }
    });
    return result;
  },

  send_verification_email({Meteor, LocalState}) {
    let userId = Meteor.userId;
    Meteor.call("send_verification_email", userId, ( err ) => {
      if(err){
        alert('EmailVerification.jsx: ' + err);
      }else{
        FlowRouter.go("/email-verification");
      }
    });
  },
};
