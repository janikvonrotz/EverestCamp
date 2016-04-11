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
      "Author",
      "Public"
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
export function cannot_access(routename){
  var roles = _.findWhere(routes, {name: routename}).roles;
  if(_.contains(roles, "Public") || Roles.userIsInRole(Meteor.user(), roles)){
    console.log("allow " + routename);
    return false;
  }
  console.log("deny " + routename);
  return true;
};

// server side
export function is_allowed(action, userId){
  var roles = _.findWhere(actions, {name: action}).roles;
  console.log(userId + ": " + roles);
  if(!_.contains(roles, "Public") && !Roles.userIsInRole(userId, roles)){
    console.log("deny " + action);
    throw new Meteor.Error("permission-denied", "Insufficient rights for this action.");
    return false;
  }
  console.log("allow " + action);
  return true;
};
