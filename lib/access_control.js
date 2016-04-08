const groups = [
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
      "Manager",
      "Public"
    ]
  },
  {
    "name": "node.delete",
    "roles": [
      "Admin",
      "Manager"
    ]
  },
  {
    "name": "node.insert",
    "roles": [
      "Admin",
      "Manager"
    ]
  }
];

export function can_access(routename){
  // check role membership
  return routename === 'route.list';
};

export function is_allowed(action){
  // check role membership
  throw new Meteor.Error("permission-denied", "Insufficient rights for this action.");
};
