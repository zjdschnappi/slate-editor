import React, { useState } from 'react';
import QuillIcon from 'quill-icons';
import { useSlate } from 'slate-react';
import ToolbarItem from '@/components/Toolbar/ToolbarItem';

export const InsertLinkButton = () => {
  const editor = useSlate();
  return (
    <ToolbarItem
      onMouseDown={(event: any) => {
        if (event.nativeEvent.which !== 1) return;
        event.preventDefault();
        const url = window.prompt('Enter the URL of the link:');
        if (!url) return;
        if (editor.selection) {
          editor.insertLink({ url });
        }
      }}
    >
      <QuillIcon.Link />
    </ToolbarItem>
  );
};
