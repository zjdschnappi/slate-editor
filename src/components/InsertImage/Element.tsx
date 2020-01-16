import React from 'react';
import { Element } from 'slate';
import { useSelected, useFocused } from 'slate-react';

export const ImageElement = ({ attributes, children, element }: Element) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '20em',
            boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`,
          }}
        />
      </div>
      {children}
    </div>
  );
};
