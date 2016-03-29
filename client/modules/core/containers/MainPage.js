import MainPage from '../components/MainPage.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { nodes_list } from '/lib/nodes_publications';

export const composer = ({context, nodeId, postId}, onData) => {
  const {Meteor, Collections} = context();
  if(!nodeId && !!postId){
    var selector = {ref_id: postId};
    if(Meteor.subscribe('nodes.list', selector).ready()){
      var node = nodes_list(selector).fetch();
      if(node){
        nodeId = node[0]._id;
        onData(null, {nodeId});
      }else{
        onData(null, {});
      }
    }
  }else{
    onData(null, {});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(MainPage);
