import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '@/packages/editor';
function App() {
  return (
    <>
      <Editor />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
