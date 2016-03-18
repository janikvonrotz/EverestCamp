Meteor.methods({
  newUser(user) {
    check(user, Object);
    return Accounts.createUser({
      email: user.email,
      password: user.password
    });
  }
});
