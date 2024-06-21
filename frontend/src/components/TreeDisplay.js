import React from 'react';

function TreeDisplay() {
  const computedTree = JSON.parse(localStorage.getItem('computedTree'));

  return (
    <div>
      <h1>Computed Tree</h1>
      <pre>{JSON.stringify(computedTree, null, 2)}</pre>
    </div>
  );
}

export default TreeDisplay;
