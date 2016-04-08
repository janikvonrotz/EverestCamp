EverestCamp is the most simple knoweldge base tool.

# Todo

* Replace form-group with p tag
* Multiple File paste
* Insert image dialog
* Protect Overwriting in Edit mode
* Add link by drag n drop
* User role setup
* Routing Access Control
* Guest user Fronted
* Data Acess Control
* User profile

## Bugs

* find Notification tool that works
* Register return value is not processed

## Longterm Task

* Add user management site
* Support LDAP authentication
* Support LDAP group membership check
* Mark Node search results
* Add Like Button
* Add Elastic Search
* Add REST API - http://meteor-rest.readthedocs.org/en/rtd/rest/

## Done

* Public checkbox for post and file
* Inject image css into markdown parser
* Make components dual -> either load data from props or subscription
* Add Draft.js as Editor - https://facebook.github.io/draft-js/docs/overview.html#content
* Replace the other bootstrap components
* Rework subsription management > see files modal in post-edit
* Copy paste in editor adds div
* TreeView node list is also filtered
* TreeView without subsciber
* Fix undefined in className
* Mark active Post in tree
* NodeList selector causes sub twice
* remove jquery validation (jquery and form validations)
* Replace manual className adding with classnames
* replace div with grid row
* Focus Title field when open post or node -> only if id of post changed
* Drag n drop is triggered two times
* Draggable TreeView - http://webcloud.se/sortable-list-component-react-js/
* Multi file upload in gallery
* Add profile for user with empty collapsedNodes
* Fix logout redirect
* set max load for images
* Create fulltext search - https://meteorhacks.com/implementing-an-instant-search-solution-with-meteor/
* Add image search
* Extend image gallery: name, delete
* Enable copy and paste of image
* Rename published to public
* Add mobile media upload
* Remove tags
* Fix Frontend
* Add Github flavored Markdown
* Fix files upload by method
* Add singup with email verification
* Signup with E-Mail validation
* Rename Buttons
* Add fullscreen for Editor
* Add Dialog for Nodes -> make like post and show edit page
* Enable renaming and deletion of Nodes -> add edit with delete button and contentEditable
* Update name of post in node list
* add type and ref_id to Node
* Add post to node
* Image inline uploader
* Finish Editor -> show markown on load, css, picture link
* Fix pasting Text
* getPath replace title with ID
* search function that uses path to filter -> search for items that match and display their path

## Rejected

* Add split view - https://atmospherejs.com/cosmos/browserify#use-in-a-meteor-app  https://github.com/nathancahill/Split.js
* Save cursor position in Editor - http://jsfiddle.net/WeWy7/3/  http://stackoverflow.com/questions/13949059/persisting-the-changes-of-range-objects-after-selection-in-html/13950376#13950376
* Previous and next Button for file-edit

# Sources

Editor
https://github.com/JedWatson/react-md-editor

Framework
https://kadirahq.github.io/mantra/#sec-Server-Side-Rendering-SSR-

Treeview
https://github.com/chenglou/react-treeview

Sample App
https://github.com/mantrajs/mantra-sample-blog-app

React Blog
https://github.com/themeteorchef/building-a-blog-with-react

Inline Upload
https://github.com/Rovak/InlineAttachment

Content Editable
https://github.com/lovasoa/react-contenteditable

Design Pattern
https://medium.com/@SamCorcos/meteor-react-design-pattern-mixins-v-composable-components-990a5411e1b7

Meteor settings
https://themeteorchef.com/snippets/making-use-of-settings-json/

Thinking in React
https://facebook.github.io/react/docs/thinking-in-react.html

Drag n Drop Basics
http://www.html5rocks.com/en/tutorials/dnd/basics/

ES6 modules
http://www.2ality.com/2014/09/es6-modules-final.html

ES6 check
http://www.2ality.com/2013/04/check-undefined.html

Basics of Subscriptions
https://stackoverflow.com/questions/19826804/understanding-meteor-publish-subscribe/21853298#21853298

Multiple Subscriptions
http://stackoverflow.com/questions/12632452/publishing-subscribing-multiple-subsets-of-the-same-server-collection

# Doku

## Run

More about some custom components.

    meteor --settings settings-default.json

## Roles and permissions

Admin: Full Access on files, nodes, posts, users
Builder: CRUD nodes, posts, files
Author: CRUD posts, files
Public: R public posts

## Naming

**Files**

React components: CamelCase
Everything else: underscore_case

**Functions**

underscore_case

## ContentEditable

in Parent Component add:

```
constructor(props, context) {
  super(props, context);

  this.state = {
    shouldChildComponentUpdate: false,
    showModal: false
  };
};

componentWillReceiveProps(nextProps){
  // when parent has received new props also update child component
  this.setState({
    shouldChildComponentUpdate: nextProps.nodeId != this.props.nodeId
  });
}

componentDidUpdate(){
  // once parent is updated do not update child component
  this.state.shouldChildComponentUpdate = false
}
```

Then pass the shouldChildComponentUpdate state to the ContentEditable component.
This will make sure, that the component only updates when the data context changes.

## Crazy Bugs

When using subscriptions with parameters make sure to add an else statement.

```
if(Meteor.subscribe('posts.single', postId).ready()) {
  console.log("onData post-edit")
  const post = posts_single(postId).fetch()[0];
  onData(null, {post});
}else{
  onData(null, {});
}
```
