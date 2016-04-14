import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {MainPage} from '../core/containers/index.js';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/nodes', {
    name: 'nodes.list',
    action() {
      mount(AppLayout, {
        content: () => (<MainPage />)
      });
    }
  });

  FlowRouter.route('/nodes/:nodeId/edit', {
    name: 'nodes.single',
    action({nodeId}) {
      mount(AppLayout, {
        content: () => (<MainPage nodeId={nodeId}/>)
      });
    }
  });
}
