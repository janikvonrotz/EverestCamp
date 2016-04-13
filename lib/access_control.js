const actions = [
  {
    "name": "post.insert",
    "roles": [
      "Admin",
      "Author"
    ]
  },
  {
    "name": "post.update",
    "roles": [
      "Admin",
      "Author"
    ]
  },
  {
    "name": "post.remove",
    "roles": [
      "Admin",
      "Author"
    ]
  },
  {
    "name": "post.read",
    "roles": [
      "Admin",
      "Author"
    ]
  }
];

const routes = [
  {
    "name": "post.list",
    "roles": [
      "Admin",
      "Author",
      "Manager"
    ]
  },
  {
    "name": "post.edit",
    "roles": [
      "Admin",
      "Author"
    ]
  }
];

// client side
export function redirect_login(routename){
  var roles = _.findWhere(routes, {name: routename}).roles;
  if(!_.contains(roles, "Public") && !Meteor.userId()){
    console.log("redirect login");
    return true;
  }
  return false;
};

// client side
export function redirect_verify(){
  if(!Meteor.user().emails[0].verified){
    console.log("redirect verify");
    return true;
  }
  return false;
};

// client side
export function cannot_access(routename){
  var roles = _.findWhere(routes, {name: routename}).roles;
  if(_.contains(roles, "Public") || Roles.userIsInRole(Meteor.user(), roles)){
    console.log("allow route " + routename);
    return false;
  }
  console.log("deny route " + routename);
  return true;
};

// server side
export function is_allowed(action, userId){
  var roles = _.findWhere(actions, {name: action}).roles;
  var user = Meteor.users.findOne(userId);
  console.log(userId + ": " + user.roles);
  console.log("allowed roles: " + roles);
  console.log("verified: " + user.emails[0].verified);
  // if public allow if not, either user has not role or email is not verified
  if(!_.contains(roles, "Public") && (!Roles.userIsInRole(userId, roles) || !user.emails[0].verified)){
    console.log("deny action " + action);
    throw new Meteor.Error("permission-denied", "Insufficient rights for this action.");
    return false;
  }
  console.log("allow action " + action);
  return true;
};
