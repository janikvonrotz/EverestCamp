import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'send_verification_email'(userId) {
      return Accounts.sendVerificationEmail(userId);
    }
  });
}
