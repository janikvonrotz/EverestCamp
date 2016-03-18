import {Nodes, getNodePath} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'nodes.insert'(node) {
      check( node, Object );
      return Nodes.insert(node);
    }
  });
}
