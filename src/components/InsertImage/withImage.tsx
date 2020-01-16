import { Editor, Command } from 'slate';

export const withImage = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = (command: Command) => {
    switch (command.type) {
      case 'insert_image': {
        const { url } = command;
        const text = { text: '' };
        const image = { type: 'image', url, children: [text] };
        Editor.insertNodes(editor, image);
        break;
      }
      default: {
        exec(command);
        break;
      }
    }
  };
  return editor;
};
