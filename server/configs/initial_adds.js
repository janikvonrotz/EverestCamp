import {Nodes, Posts} from '/lib/collections';

export default function () {
  if (!Nodes.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const node = {
        label: `This is the post title: ${lc}`
      }
      Nodes.insert(node);
    }
  }

  if (!Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Posts.insert({title, content});
    }
  }
}
