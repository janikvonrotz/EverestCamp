import React from 'react';

const NodeList = ({nodes}) => (
  <div className='nodelist'>
    <ul>
      {nodes.map(node => (
        <li key={node._id}>
          <a href={`/node/${node._id}`}>{node.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default NodeList;
