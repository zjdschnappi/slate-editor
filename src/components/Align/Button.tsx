// richtext toolbar button
import React from 'react';
import { useSlate } from 'slate-react';
import ToolbarItem from '../Toolbar/ToolbarItem';
import { isBlockFormatActive } from '../util';
export default function AlignButton({
  format,
  position,
  title,
  children,
  ...rest
}: any) {
  const editor = useSlate();
  const match = isBlockFormatActive(editor, format);

  return (
    <ToolbarItem
      title={title}
      active={match?.[0]?.position === position}
      onMouseDown={(event: any) => {
        if (event.nativeEvent.which !== 1) return;
        event.preventDefault();
        editor.toggleAlign({ format, position });
      }}
      {...rest}
    >
      {children}
    </ToolbarItem>
  );
}
