import React, { useMemo, useState, useCallback } from 'react';
import { createEditor, Element } from 'slate';
import { withRichText } from './RichText';
import { withColor } from './Color';
import { withBackgroundColor } from './BackgroundColor';
import { Slate, Editable, withReact } from 'slate-react';
import Toolbar from './Toolbar';
import '@/styles/index.less';
import { withImage, ImageElement } from '@/components/InsertImage';
import { withLink, LinkElement } from '@/components/InsertLink';
import { withAlign } from './Align';

export default ({ defaultValue }) => {
  const editor = useMemo(
    () =>
      withAlign(
        withLink(
          withImage(
            withBackgroundColor(
              withColor(withRichText(withReact(createEditor())))
            )
          )
        )
      ),
    []
  );
  const [value, setValue] = useState(defaultValue);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const Element = (props: Element) => {
    const { attributes, children, element } = props;

    switch (element.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      case 'align':
        return (
          <div style={{ textAlign: element.position }} {...attributes}>
            {children}
          </div>
        );
      case 'image':
        return <ImageElement {...props} />;
      case 'link':
        return <LinkElement {...props} />;
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

  const Leaf = ({ attributes, children, leaf }: any) => {
    if (leaf.bold) {
      children = <strong {...attributes}>{children}</strong>;
    }

    if (leaf.code) {
      children = <code {...attributes}>{children}</code>;
    }

    if (leaf.italic) {
      children = <em {...attributes}>{children}</em>;
    }

    if (leaf.underlined) {
      children = <u {...attributes}>{children}</u>;
    }
    if (leaf.del) {
      children = <del {...attributes}>{children}</del>;
    }
    if (leaf.sub) {
      children = <sub {...attributes}>{children}</sub>;
    }
    if (leaf.sup) {
      children = <sup {...attributes}>{children}</sup>;
    }

    if (leaf['font-color']) {
      children = (
        <span style={{ color: leaf.color }} {...attributes}>
          {children}
        </span>
      );
    }
    if (leaf['background-color']) {
      children = (
        <span style={{ backgroundColor: leaf.backgroundColor }} {...attributes}>
          {children}
        </span>
      );
    }

    return <span {...attributes}>{children}</span>;
  };
  return (
    <Slate
      value={value}
      editor={editor}
      onChange={value => {
        setValue(value);
      }}
    >
      <Toolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        className="bear-editor-content"
      />
    </Slate>
  );
};
