import React from 'react';
import {mount} from 'react-mounter';

import App from '../core/components/App.jsx';
import {MainPage} from '../core/containers/index.js';
import actions from './actions';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/posts', {
    name: 'post.list',
    triggersEnter: [function(context, redirect) {
      actions.posts.read('post.list', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<MainPage />)
      });
    }
  });

  FlowRouter.route('/posts/:postId/edit', {
    name: 'post.edit',
    triggersEnter: [function(context, redirect) {
      actions.posts.read('post.edit', redirect);
    }],
    action({postId}) {
      mount(AppLayout, {
        content: () => (<MainPage postId={postId}/>)
      });
    }
  });
}
