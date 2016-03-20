export default {
  register({Meteor, LocalState}, email, password) {
    Accounts.createUser({email, password}, (err, res) => {
      if(err){
        alert('Register.jsx: ' + err);
      }else{
        FlowRouter.go('/email-verification');
      }
    });
  }
};
