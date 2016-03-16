import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Posts = new Mongo.Collection('posts');

let schema = new SimpleSchema({

});

// Posts.attachSchema(schema);

export default Posts;
