import React, { useState } from 'react';
import {
  Editor,
  OnChangeParam,
  EditorProps,
  RenderInlineProps,
  getEventTransfer,
} from 'slate-react';
import { Value, EditorOptions, SchemaProperties, Block, ValueJSON } from 'slate';

const initialValue: ValueJSON = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: '',
          },
        ],
      },
    ],
  },
};
export default function SlateEditor() {
  const [value, setvalue] = useState(Value.fromJSON(initialValue));
  const handleChange = ({ value }: OnChangeParam) => {
    setvalue(value);
  };
  return <Editor value={value} onChange={handleChange} placeholder="请输入" />;
}
