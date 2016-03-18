let emailConfig = () => {

  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset-password/' + token);
  };

  Accounts.urls.verifyEmail = function (token) {
    return Meteor.absoluteUrl('email-verification/' + token);
  };

  Accounts.onCreateUser(function(options, user) {
    Meteor.setTimeout(function() {
      Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);
    return user;
  });
}

Modules.server.emailConfig = emailConfig;
