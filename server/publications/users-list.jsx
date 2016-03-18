Meteor.publish("usersList", function () {
  if(this.user.emails[0].verified){
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
  }else{
    this.stop();
    return;
  }
});
