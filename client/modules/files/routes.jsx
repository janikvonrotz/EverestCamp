import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {FileSearch, FileEdit} from './containers/index.js';
import actions from './actions';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/files', {
    name: 'file.list',
    triggersEnter: [function(context, redirect) {
      actions.files.access_route('file.list', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<FileSearch />)
      });
    }
  });

  FlowRouter.route('/files/:fileId/edit', {
    name: 'file.edit',
    triggersEnter: [function(context, redirect) {
      actions.files.access_route('file.edit', redirect);
    }],
    action({fileId}) {
      mount(AppLayout, {
        content: () => (<FileEdit fileId={fileId}/>)
      });
    }
  });
}
