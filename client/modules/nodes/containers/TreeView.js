import TreeView from '../components/TreeView.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { nodes_search } from '/lib/nodes_publications';

export const composer = ({context, activeNodeId, filterText}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  console.log(filterText);
  if (Meteor.subscribe('nodes.search', filterText).ready()) {
    const nodes = nodes_search(filterText).fetch().map( ( node ) => {
      var href=`/nodes/${ node._id }/edit`;
      if(node.type === 'post'){
        href=`/posts/${ node.ref_id }/edit`;
      }
      return { _id: node._id, type: node.type, href: href, label: node.label, parent: node.parent };
    });
    console.log(nodes);
    onData(null, {nodes, activeNodeId});
  }
};

export const depsMapper = (context, actions) => ({
  update_parent: actions.nodes.update_parent,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TreeView);
