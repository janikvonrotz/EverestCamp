import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {FileSearch, FileEdit} from './containers/index.js';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/files', {
    name: 'file.list', action() {
      mount(AppLayout, {
        content: () => (<FileSearch />)
      });
    }
  });

  FlowRouter.route('/files/:fileId/edit', {
    name: 'file.item',
    action({fileId}) {
      mount(AppLayout, {
        content: () => (<FileEdit fileId={fileId}/>)
      });
    }
  });
}
