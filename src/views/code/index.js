import React from 'react';

import CodeSanbox from '../../components/code-sandbox';
import './style.css';

const Code = ({ match: { params } }) => {
  console.log('Views::Code', );

  return (
    <div className="Code">
      <CodeSanbox
        title="test"
        hash={params.hash}
      />
    </div>
  );
}

export default Code;
