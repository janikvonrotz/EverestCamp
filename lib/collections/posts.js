import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import slugify from '/lib/slugify';

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
        return user.profile.firstname + " " + user.profile.lastname;
      }
    }
  },
  "updated": {
    type: Date,
    label: "The date this post was last updated on.",
    autoValue() {
      return ( new Date() );
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
      let slug = slugify(this.field("title").value);
      existingSlugCount = Posts.find( { _id: { $ne: this.docId }, slug: slug } ).count();
      return existingSlugCount > 0 ? (slug + '-' + (existingSlugCount + 1)) : slug;
    }
  },
  "content": {
    type: String,
    label: "The content of this post.",
    defaultValue: "Write something here."
  },
  "history": {
    type: [Object],
    label: "History of content.",
    defaultValue: [{
      date: new Date(),
      title: "Untitled Post",
      content: "Init",
      author: "Admin",
      userId: "System"
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
  },
  "history.$.title": {
    type: String
  }
});

Posts.attachSchema(schema);

export default Posts;
