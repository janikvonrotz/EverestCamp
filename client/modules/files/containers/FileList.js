import FileList from '../components/FileList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import {files_search} from '/lib/files_publications';

export const composer = ({context, filterText, limit}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('files.search', filterText, limit).ready()) {
    const files = files_search(filterText, limit).fetch().map( ( file ) => {
      return { _id: file._id, href: `/files/${ file._id }/edit`, src: file.url({store: "thumbs"}), label: file.metadata.name};
    });
    onData(null, {files});
  }
};

export const depsMapper = (context, actions) => ({
  upload: actions.files.upload,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FileList);
