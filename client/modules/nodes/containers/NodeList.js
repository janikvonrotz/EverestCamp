import NodeList from '../components/NodeList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, nodeId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const filterText = LocalState.get('filterText') || '';
  console.log(filterText);
  if (Meteor.subscribe('nodes.search', filterText).ready()) {
    const nodes = Collections.Nodes.find().fetch().map( ( node ) => {
      var href=`/nodes/${ node._id }/edit`;
      if(node.type === 'post'){
        href=`/posts/${ node.ref_id }/edit`;
      }
      return { _id: node._id, type: node.type, href: href, label: node.label, parent: node.parent };
    });
    onData(null, {nodes, nodeId});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(NodeList);
