import React from 'react';
import {mount} from 'react-mounter';

import App from '../core/components/App.jsx';
import {MainPage} from '../core/containers/index.js';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/posts', {
    name: 'posts.list', action() {
      mount(AppLayout, {
        content: () => (<MainPage />)
      });
    }
  });

  FlowRouter.route('/posts/:postId/edit', {
    name: 'posts.single',
    action({postId}) {
      mount(AppLayout, {
        content: () => (<MainPage postId={postId}/>)
      });
    }
  });
}
