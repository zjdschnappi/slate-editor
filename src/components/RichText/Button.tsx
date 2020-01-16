// richtext toolbar button
import React from 'react';
import { useSlate } from 'slate-react';
import { isFormatActive, BLOCK_FORMATS } from './util';
import ToolbarItem from '../Toolbar/ToolbarItem';
import { Editor } from 'slate';
export default function RichtextButton({ format, children, ...rest }: any) {
  const editor = useSlate();
  const isActive = isFormatActive(editor, format);
  return (
    <ToolbarItem
      active={isActive}
      onMouseDown={(event: any) => {
        if (event.nativeEvent.which !== 1) return;

        event.preventDefault();
        if (BLOCK_FORMATS.includes(format)) {
          editor.formatBlock({ format });
          return;
        }
        if (isActive) {
          Editor.removeMark(editor, format);
        } else {
          Editor.addMark(editor, format, true);
        }
      }}
      {...rest}
    >
      {children}
    </ToolbarItem>
  );
}
