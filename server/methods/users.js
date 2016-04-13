import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'send_verification_email'() {
      return Accounts.sendVerificationEmail(Meteor.userId());
    }
  });
}
