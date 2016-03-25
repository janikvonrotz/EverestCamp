import React from 'react';
import {mount} from 'react-mounter';

import {App, MainPage} from '../core/components/index.jsx';

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
