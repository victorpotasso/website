import React, { useState, useEffect, useRef } from 'react';

import './style.css';

const CodeSandbox = ({ hash, title }) => (
  <iframe
    src={`https://codesandbox.io/embed/${hash}?fontsize=14`}
    title={title}
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
);

export default CodeSandbox;