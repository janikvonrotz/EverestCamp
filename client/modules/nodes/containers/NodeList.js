import NodeList from '../components/NodeList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(NodeList);
