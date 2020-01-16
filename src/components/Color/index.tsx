import ColorButton from './Button';
import QuillIcons from 'quill-icons';
import { Editor, Text, Transforms } from 'slate';
const ColorIcon = QuillIcons.Color;
const withColor = (editor: Editor) => {
  editor.formatColor = (command: any) => {
    const { format, color } = command;
    Transforms.setNodes(
      editor,
      { [format]: true, color },
      { match: Text.isText, split: true }
    );
  };

  return editor;
};
export { withColor, ColorButton, ColorIcon };
