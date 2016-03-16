import React from 'react';
import {mount} from 'react-mounter';

import App from './components/App.jsx';
import NodeList from '../nodes/components/NodeList.jsx';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/nodes/', {
    name: 'nodes.list', action() {
      mount(AppLayout, {
        content: () => (<NodeList />)
      });
    }
  });

  FlowRouter.route('/nodes/:nodeId/edit', {
    name: 'nodes.single',
    action({nodeId}) {
      mount(MainLayoutCtx, {
        content: () => (<NodeList nodeId={nodeId}/>)
      });
    }
  });
}
