import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Nodes = new Mongo.Collection('nodes');

let schema = new SimpleSchema({

});

Nodes.attachSchema(schema);

export default Nodes;
