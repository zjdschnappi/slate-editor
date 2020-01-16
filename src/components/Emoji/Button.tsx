// font-color toolbar button
import React, { useState } from 'react';
import { useSlate, ReactEditor } from 'slate-react';
import ToolbarItem from '../Toolbar/ToolbarItem';
import { emojis } from './config';
import Dropdown from 'rc-dropdown';

export default function EmojiButton({ format, children, ...rest }: any) {
  const editor = useSlate();
  const [visible, setVisible] = useState(false);
  const renderOverlay = () => {
    return (
      <ul className="bear-emojis">
        {emojis.map((item, index) => {
          return (
            <li
              key={index}
              className="bear-emoji-item"
              onClick={e => {
                e.preventDefault();
                handleInsertEmoji(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  };
  const handleInsertEmoji = (item: string) => {
    editor.insertText(item);
    setVisible(false);
  };
  return (
    <Dropdown
      visible={visible}
      onVisibleChange={(v: boolean) => {
        setVisible(v);
      }}
      overlayClassName="bear-emojis-wrap"
      placement="bottomCenter"
      overlay={renderOverlay()}
    >
      <ToolbarItem title={format} {...rest}>
        {children}
      </ToolbarItem>
    </Dropdown>
  );
}
