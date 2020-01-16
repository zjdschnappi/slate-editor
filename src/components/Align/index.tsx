import QuillIcons from 'quill-icons';
import { Editor, Transforms } from 'slate';
import AlignButton from './Button';
import { isBlockFormatActive } from '../util';
const AlignLeftIcon = QuillIcons.AlignLeft;
const AlignRightIcon = QuillIcons.AlignRight;
const AlignCenterIcon = QuillIcons.AlignCenter;
const withAlign = (editor: Editor) => {
  editor.toggleAlign = (command: any) => {
    const { format, position } = command;
    const match = isBlockFormatActive(editor, format);
    if (match) {
      Transforms.unwrapNodes(editor, {
        match: n => n.type === format,
        split: true,
      });
      if (match[0] && match[0].position !== position) {
        Transforms.wrapNodes(editor, { type: format, position, children: [] });
      }
    } else {
      Transforms.wrapNodes(editor, { type: format, position, children: [] });
    }
  };

  return editor;
};
export {
  withAlign,
  AlignButton,
  AlignLeftIcon,
  AlignRightIcon,
  AlignCenterIcon,
};
