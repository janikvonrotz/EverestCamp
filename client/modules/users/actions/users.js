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
  }
};
