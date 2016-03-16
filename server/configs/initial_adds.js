import {Nodes} from '/lib/collections';

export default function () {
  if (!Nodes.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const node = {
        label: `This is the post title: ${lc}`
      }

      Nodes.insert(node);
    }
  }
}
