import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {MainPage} from '../core/containers/index.js';
import {PostView} from './containers';
import actions from './actions';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/posts', {
    name: 'post.list',
    triggersEnter: [function(context, redirect) {
      actions.posts.access_route('post.list', redirect);
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
      actions.posts.access_route('post.edit', redirect);
    }],
    action({postId}) {
      mount(AppLayout, {
        content: () => (<MainPage postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/posts/:postId/:slug', {
    name: 'post.view',
    triggersEnter: [function(context, redirect) {
      actions.posts.access_route('post.view', redirect);
    }],
    action({postId, slug}) {
      mount(AppLayout, {
        content: () => (<PostView postId={postId} slug={slug} />)
      });
    }
  });
}
