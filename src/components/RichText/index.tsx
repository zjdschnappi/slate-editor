import { Editor, Transforms } from 'slate';
import RichtextButton from './Button';
import { LIST_FORMATS } from './util';
import { isBlockFormatActive } from '../util';
const withRichText = (editor: Editor) => {
  // custom command fomatBlock for block rich text
  // here is the definition
  editor.formatBlock = (command: any) => {
    const { format } = command;
    const isActive = isBlockFormatActive(editor, format);
    const isList = LIST_FORMATS.includes(format);

    for (const f of LIST_FORMATS) {
      Transforms.unwrapNodes(editor, {
        match: n => n.type === f,
        split: true,
      });
    }

    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    });

    if (!isActive && isList) {
      Transforms.wrapNodes(editor, { type: format, children: [] });
    }
  };

  return editor;
};
export { RichtextButton, withRichText };
