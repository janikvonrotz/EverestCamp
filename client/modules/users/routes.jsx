import React from 'react';
import {mount} from 'react-mounter';
import App from '../core/components/App.jsx';
import {Register, Login, RecoverPassword, ResetPassword, EmailVerification} from './containers';

export default function (injectDeps, {FlowRouter}) {
  const AppLayout = injectDeps(App);

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
}
