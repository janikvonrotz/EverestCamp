import FileEdit from '../components/FileEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import {files_single} from '/lib/files_publications';

export const composer = ({context, fileId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('files.single', fileId).ready()) {
    const file = files_single(fileId).fetch()[0];;
    onData(null, {file});
  }
};

export const depsMapper = (context, actions) => ({
  update: actions.files.update,
  remove: actions.files.remove,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FileEdit);
