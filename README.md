EverestCamp is a minimal-effort, user-friendly and future-proof knowledge base.


# Todo

* Insert image dialog
* replace div with grid row
* Focus Title field when open post or node -> only if id of post changed
* Protect Overwriting in Edit mode
* Replace manual className adding with classnames
* Add link by drag n drop
* remove jquery validation (jquery and form validations)
* Previous and next Button for file-edit

## Bugs

* TreeView without subsciber
* Fix undefined in className
* Mark active Post in tree
* Inject image css into markdown parser
* Copy paste in editor adds div
* TreeView node list is also filtered

## Longterm Task

* Rework subsription management > see files modal in post-edit
* Save cursor position in Editor - http://jsfiddle.net/WeWy7/3/  http://stackoverflow.com/questions/13949059/persisting-the-changes-of-range-objects-after-selection-in-html/13950376#13950376
* Add Draft.js as Editor - https://facebook.github.io/draft-js/docs/overview.html#content
* Replace the other bootstrap components
* Mark Node search results
* Add Like Button
* Add Elastic Search
* Make components dual -> either load data from props or subscription
* Add REST API - http://meteor-rest.readthedocs.org/en/rtd/rest/

## Done

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

# Meteor Packages

**Roles and permission**

alanning:roles

**Data Model**

aldeed:collection2

**File processing and storage**

cfs:standard-packages
cfs:filesystem
cfs:graphicsmagick

**Data seeder**

digilord:faker

**Routing**

kadira:flow-router
kadira:react-layout

**Date and time**

momentjs:moment

**Dependency management**

npm-container
meteorhacks:npm
cosmos:browserify

**Url slug**

ongoworks:speakingurl

**Basic js functions**

stevezhu:lodash

**Error reporting**

themeteorchef:bert

**Form validation**

themeteorchef:jquery-validation

**UI**

twbs:bootstrap

**Markdown**

chuangbo:marked

**NPM Packages**

"classnames": "2.1.3"
"externalify": "0.1.0"

# Doku

## Run

More about some custom components.

    meteor --settings settings-default.json

## Roles and permissions

Admin: Full Access
Manager: CRUD nodes and posts
Author: CRUD posts

## ContentEditable

onChange will hold key and value in the target property.

shouldComponentUpdate important for real time edits

## TreeView

## React Structure

* getMeteorData
* getInitialState
* getDefaultProps
* shouldComponentUpdate
* componentWillReceiveProps
* CRUD functions
* helper functions
* componentWillUpdate
* render functions
* render
* componentDidUpdate

## Naming

Private List: objects-list
Private Item Edit: object-edit
Public List: objects-index
Public Item View: object-item
Search List: objects-search
