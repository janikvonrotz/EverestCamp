import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    'user.send_verification_email'() {
      return Accounts.sendVerificationEmail(Meteor.userId());
    },

    'user.update'(field) {
      check(field, Object);
      const userId = Meteor.userId();

      if(field["email"] != undefined){
        // Accounts.removeEmail(userId, Meteor.user().emails[0].address);

        // add new mail and sen verification mail
        Accounts.addEmail(userId, field.email, false);
        Accounts.sendVerificationEmail(userId);
      }else if(field["username"] != undefined){
        Accounts.setUsername(userId, field.username);
        return field.username;
      }else{
        Meteor.users.update(userId, { $set: field } );
      }
    }
  });
}
