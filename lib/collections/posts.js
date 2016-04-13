import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Posts = new Mongo.Collection('posts');

let schema = new SimpleSchema({
  "public": {
    type: Boolean,
    label: "Is this post public?",
    autoValue() {
      if ( this.isInsert ) {
        return false;
      }
    }
  },
  "author": {
    type: String,
    label: "The ID of the author of this post.",
    autoValue() {
      let user = Meteor.users.findOne( { _id: this.userId } );
      if ( user ) {
        return user.profile.name.first + " " + user.profile.name.last;
      }
    }
  },
  "updated": {
    type: String,
    label: "The date this post was last updated on.",
    autoValue() {
      return ( new Date() ).toISOString();
    }
  },
  "title": {
    type: String,
    index: true,
    label: "The title of this post.",
    defaultValue: "Untitled Post"
  },
  "slug": {
    type: String,
    label: "The slug for this post.",
    autoValue() {
      let slug = this.value,
      existingSlugCount = Posts.find( { _id: { $ne: this.docId }, slug: new RegExp( slug ) } ).count(),
      existingUntitled = Posts.find( { slug: { $regex: /untitled-post/i } } ).count();

      if ( slug ) {
        return existingSlugCount > 0 ? (slug + '-' + (existingSlugCount + 1)) : slug;
      } else {
        return existingUntitled > 0 ? ('untitled-post-' + (existingUntitled + 1)) : 'untitled-post';
      }
    }
  },
  "content": {
    type: String,
    label: "The content of this post.",
    defaultValue: ""
  },
  "history": {
    type: [Object],
    label: "History of content.",
    defaultValue: [{
      date: new Date(),
      content: "init",
      author: "Admin",
      userId: "sytem"
    }]
  },
  "history.$.date": {
    type: Date
  },
  "history.$.content": {
    type: String
  },
  "history.$.author": {
    type: String
  },
  "history.$.userId": {
    type: String
  }
});

Posts.attachSchema(schema);

export default Posts;
