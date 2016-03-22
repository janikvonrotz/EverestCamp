import NodeEdit from '../components/NodeEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { nodes_list, nodes_single } from '/lib/nodes_publications';

export const composer = ({context, nodeId}, onData) => {
  const {Meteor, Collections} = context();
  var selector = {$or: [
    {_id: nodeId},
    {parent: nodeId}
  ]};
  if (Meteor.subscribe('nodes.list', selector).ready()) {
    const node = nodes_single( nodeId );
    const nodes = nodes_list( { parent: nodeId } ).fetch().map( ( node ) => {
      var href=`/nodes/${ node._id }/edit`;
      if(node.type === 'post'){
        href=`/posts/${ node.ref_id }/edit`;
      }
      return { _id: node._id, href: href, label: node.label, type: node.type };
    });
    console.log(node);
    onData(null, {node, nodes});
  }
};

export const depsMapper = (context, actions) => ({
  update: actions.nodes.update,
  remove: actions.nodes.remove,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NodeEdit);
