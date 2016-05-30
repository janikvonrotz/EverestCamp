import nodes from './nodes';
import posts from './posts';
import files from './files';
import users from './users';

export default function () {
  posts();
  nodes();
  files();
  users();
}
