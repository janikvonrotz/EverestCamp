import React from 'react';
import {mount} from 'react-mounter';

import App from './components/App.jsx';
import Register from '../users/containers/Register';
import PostList from '../posts/containers/PostList';
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

  FlowRouter.route('/login', {
    name: 'users.login', action() {
      mount(AppLayout, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.register', action() {
      mount(AppLayout, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/email-verification', {
    name: 'users.email-verification', action() {
      mount(AppLayout, {
        content: () => (<Register />)
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
      mount(AppLayout, {
        content: () => (<NodeList nodeId={nodeId}/>)
      });
    }
  });
}
