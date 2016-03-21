import TreeView from '../components/TreeView.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, activeNodeId, filterText}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  console.log(filterText);
  if (Meteor.subscribe('nodes.search', filterText).ready()) {
    const nodes = Collections.Nodes.find().fetch().map( ( node ) => {
      var href=`/nodes/${ node._id }/edit`;
      if(node.type === 'post'){
        href=`/posts/${ node.ref_id }/edit`;
      }
      return { _id: node._id, type: node.type, href: href, label: node.label, parent: node.parent };
    });
    onData(null, {nodes, activeNodeId});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(TreeView);
