import NodeEdit from '../components/NodeEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, nodeId}, onData) => {
  const {Meteor, Collections} = context();

  var selector = {$or: [
    {_id: nodeId},
    {parent: nodeId}
  ]};

  if (Meteor.subscribe('nodes.list').ready()) {
    const node = Collections.Nodes.findOne( { _id: nodeId } );
    const nodes = Collections.Nodes.find( { parent: nodeId } ).fetch().map( ( node ) => {
      var href=`/nodes/${ node._id }/edit`;
      if(node.type === 'post'){
        href=`/posts/${ node.ref_id }/edit`;
      }
      return { _id: node._id, href: href, label: node.label, type: node.type };
    });
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
