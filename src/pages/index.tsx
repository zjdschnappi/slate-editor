import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import Editor from '@/components/BEditor';
const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'A line of text in a paragraph.',
      },
    ],
  },
];

const App = () => {
  return <Editor defaultValue={initialValue} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
