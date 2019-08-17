import React from 'react';

const CodeSandbox = ({ hash, title }) => (
  <iframe
    src={`https://codesandbox.io/embed/${hash}?fontsize=14`}
    title={title}
    style={{
      width: '80vw',
      height: 'calc(100% - 250px)',
      border: 0,
      overflow: 'hidden'
    }}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
);

export default CodeSandbox;