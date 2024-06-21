import React, { useState } from 'react';

function TreeInput() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/convert-tree', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });
      const result = await response.json();
      setOutput(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter flat tree"
      />
      <button onClick={handleSubmit}>Submit</button>
      {output && <pre>{JSON.stringify(output, null, 2)}</pre>}
    </div>
  );
}

export default TreeInput;
