import NodeEdit from '../components/NodeEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, nodeId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('nodes.single', nodeId).ready()) {
    const node = Collections.Nodes.findOne(nodeId);
    if (node) {
      onData(null, {node});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(NodeEdit);
