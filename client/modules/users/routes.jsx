import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {Register, Login, RecoverPassword, ResetPassword, EmailVerification, UserSearch, Profile} from './containers';
import actions from './actions';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

  FlowRouter.route('/users', {
    name: 'user.list',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.list', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<UserSearch />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'user.profile',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.profile', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<Profile />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'user.login',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.login', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'user.register',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.register', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/recover-password', {
    name: 'user.recover_password',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.recover_password', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<RecoverPassword />)
      });
    }
  });

  FlowRouter.route('/reset-password/:token', {
    name: 'user.reset_password_with_token',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.reset_password_with_token', redirect);
    }],
    action({token}) {
      mount(AppLayout, {
        content: () => (<ResetPassword token={token}/>)
      });
    }
  });

  FlowRouter.route('/email-verification', {
    name: 'user.email_verification',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.email_verification', redirect);
    }],
    action() {
      mount(AppLayout, {
        content: () => (<EmailVerification />)
      });
    }
  });

  FlowRouter.route('/email-verification/:token', {
    name: 'user.reset_password_with_token',
    triggersEnter: [function(context, redirect) {
      actions.users.access_route('user.reset_password_with_token', redirect);
    }],
    action({token}) {
      mount(AppLayout, {
        content: () => (<EmailVerification token={token}/>)
      });
    }
  });
}
