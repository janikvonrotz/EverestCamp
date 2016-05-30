import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {MainPage} from '../core/containers/index.js';
import actions from './actions';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/nodes/:nodeId/edit', {
    name: 'node.edit',
    triggersEnter: [function(context, redirect) {
      actions.nodes.access_route('node.edit', redirect);
    }],
    action({nodeId}) {
      mount(AppLayout, {
        content: () => (<MainPage nodeId={nodeId}/>)
      });
    }
  });
}
