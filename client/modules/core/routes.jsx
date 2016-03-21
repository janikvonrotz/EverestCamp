import React from 'react';
import {mount} from 'react-mounter';

import App from './components/App.jsx';
import PostList from '../posts/containers/PostList';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/', {
    name: 'index', action() {
      mount(AppLayout, {
        content: () => (<PostList />)
      });
    }
  });
}
