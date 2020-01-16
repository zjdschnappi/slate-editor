// font-color toolbar button
import React from 'react';
import { useSlate } from 'slate-react';
import ToolbarItem from '../Toolbar/ToolbarItem';
import ColorPicker from 'rc-color-picker';
import { isCollapsed, isTextFormatActive } from '../util';
export default function BackColorButton({ format, children, ...rest }: any) {
  const editor = useSlate();
  const match = isTextFormatActive(editor, format) || [];
  const matchItem = match[0];
  const currentColor = matchItem && matchItem['backgroundColor'];
  const colorStyle = {
    backgroundColor: currentColor ? currentColor : null,
  };
  return (
    <ColorPicker
      className={`${format}-picker-wrap`}
      color={currentColor}
      onChange={(value: any) => {
        const { color } = value;
        if (!isCollapsed(editor)) {
          editor.formatBackgroundColor({
            format,
            backgroundColor: color,
          });
        }
      }}
    >
      <span className="color-button-item-wrap">
        <ToolbarItem style={colorStyle} title={format} {...rest}>
          {children}
        </ToolbarItem>
      </span>
    </ColorPicker>
  );
}
