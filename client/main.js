import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import nodesModule from './modules/nodes';
import postsModule from './modules/posts';
import usersModule from './modules/users';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(nodesModule);
app.loadModule(postsModule);
app.loadModule(usersModule);
app.init();
