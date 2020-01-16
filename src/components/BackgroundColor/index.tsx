import ColorButton from './Button';
import QuillIcons from 'quill-icons';
import { Editor, Text, Transforms } from 'slate';
const ColorIcon = QuillIcons.Background;
const withBackgroundColor = (editor: Editor) => {
  editor.formatBackgroundColor = (command: any) => {
    const { format, backgroundColor } = command;
    Transforms.setNodes(
      editor,
      { [format]: true, backgroundColor },
      { match: Text.isText, split: true }
    );
  };

  return editor;
};
export { withBackgroundColor, ColorButton, ColorIcon };
