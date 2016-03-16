import React from 'react';
import {mount} from 'react-mounter';

import App from './components/App.jsx';
import PostList from '../posts/containers/PostList';
import NodeInsert from '../nodes/containers/NodeInsert';
import NodeList from '../nodes/containers/NodeList';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/', {
    name: 'posts.list', action() {
      mount(AppLayout, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/nodes', {
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
