import FileEdit from '../components/FileEdit.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {files_single} from '/lib/files_publications';

export const composer = ({context, fileId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('files.item', fileId).ready()) {
    const file = Collections.Files.findOne(fileId);
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
