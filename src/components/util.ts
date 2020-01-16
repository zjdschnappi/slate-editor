import { Editor, Range } from 'slate';
// whether editor content has select something or not
// select nothing return true
export const isCollapsed = (editor: Editor) => {
  const { selection } = editor;
  if (selection) {
    const isCollapsed = Range.isCollapsed(selection);
    return !!isCollapsed;
  }
  return true;
};
// check if text format active
export const isTextFormatActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format],
    mode: 'all',
  });
  return match;
};
// check if block format active
export const isBlockFormatActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
    mode: 'all',
  });

  return match;
};
