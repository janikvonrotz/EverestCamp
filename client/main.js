import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import nodesModule from './modules/nodes';
import postsModule from './modules/posts';
import usersModule from './modules/users';
import filesModule from './modules/files';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(nodesModule);
app.loadModule(postsModule);
app.loadModule(usersModule);
app.loadModule(filesModule);
app.init();

// make sure FlowRouter runs once Roles are loaded
Tracker.autorun(() => {
  if(!Roles.subscription.ready()){
    FlowRouter.wait();
  }
  if(Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize();
  };
});
