import {Meteor} from 'meteor/meteor';
import { nodes_list, nodes_search } from '/lib/nodes_publications';
import {is_allowed} from '/lib/access_control';
import {Nodes} from '/lib/collections';

export default function () {

  Meteor.publish('nodes.list', function (selector, options) {
    if(is_allowed('node.read', this.userId)){
      return nodes_list(selector, options);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish( 'nodes.search', function (filterText){
    if(is_allowed('node.read', this.userId)){
      return nodes_search(filterText);
    }else{
      this.stop();
      return;
    }
  });

  Meteor.publish('nodes.item', function (nodeId) {
    check(nodeId, String);
    if(is_allowed('node.read', this.userId)){
      var selector = {_id: nodeId};
      return Nodes.find(selector);
    }else{
      this.stop();
      return;
    }
  });
}
