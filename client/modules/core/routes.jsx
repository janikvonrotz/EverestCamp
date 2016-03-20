import React from 'react';
import {mount} from 'react-mounter';

import App from './components/App.jsx';
import Register from '../users/containers/Register';
import Login from '../users/containers/Login';
import RecoverPassword from '../users/containers/RecoverPassword';
import ResetPassword from '../users/containers/ResetPassword';
import EmailVerification from '../users/containers/EmailVerification';
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
        content: () => (<Login />)
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

  FlowRouter.route('/recover-password', {
    name: 'users.recover_password', action() {
      mount(AppLayout, {
        content: () => (<RecoverPassword />)
      });
    }
  });

  FlowRouter.route('/reset-password/:token', {
    name: 'users.reset_password',
    action({token}) {
      mount(AppLayout, {
        content: () => (<ResetPassword token={token}/>)
      });
    }
  });

  FlowRouter.route('/email-verification', {
    name: 'users.email_verification', action() {
      mount(AppLayout, {
        content: () => (<EmailVerification />)
      });
    }
  });

  FlowRouter.route('/email-verification/:token', {
    name: 'users.reset_password_with_token',
    action({token}) {
      mount(AppLayout, {
        content: () => (<EmailVerification token={token}/>)
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
