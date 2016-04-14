import React from 'react';
import {mount} from 'react-mounter';
import {App, NotFound} from './components/index.jsx';
import {PostList} from '../posts/containers';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/', {
    name: 'index',
    action() {
      mount(AppLayout, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.notFound = {
    action() {
      mount(<NotFound />, {});
    }
  };
}
