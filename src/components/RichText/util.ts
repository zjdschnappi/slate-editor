import { Editor } from 'slate';
import QuillIcon from 'quill-icons';
import { isTextFormatActive, isBlockFormatActive } from '../util';
export const TEXT_FORMATS = [
  'bold',
  'italic',
  'underlined',
  'del',
  'sub',
  'sup',
  'code',
];
export const LIST_FORMATS = ['numbered-list', 'bulleted-list'];
export const BLOCK_FORMATS = [
  ...LIST_FORMATS,
  'heading-one',
  'heading-two',
  'block-quote',
];
export const RICH_FORMATS = [...TEXT_FORMATS, ...BLOCK_FORMATS];
export const RICH_FORMATS_MAP: { [key: string]: any } = {
  bold: {
    icon: QuillIcon.Bold,
    title: 'bold',
  },
  italic: {
    icon: QuillIcon.Italic,
    title: 'italic',
  },
  underlined: {
    icon: QuillIcon.Underline,
    title: 'underline',
  },
  del: {
    icon: QuillIcon.Strike,
    title: 'strike-through',
  },
  sub: {
    icon: QuillIcon.Subscript,
    title: 'subscript',
  },
  sup: {
    icon: QuillIcon.Superscript,
    title: 'superscript',
  },

  code: {
    icon: QuillIcon.Code,
    title: 'code',
  },
  ['heading-one']: {
    icon: QuillIcon.Header,
    title: 'heading-one',
  },
  ['heading-two']: {
    icon: QuillIcon.Header2,
    title: 'heading-two',
  },
  ['numbered-list']: {
    icon: QuillIcon.ListOrdered,
    title: 'numbered-list',
  },
  ['bulleted-list']: {
    icon: QuillIcon.ListBullet,
    title: 'bulleted-list',
  },
  ['block-quote']: {
    icon: QuillIcon.Blockquote,
    title: 'block-quote',
  },
};
export const isFormatActive = (editor: Editor, format: string) => {
  if (TEXT_FORMATS.includes(format)) {
    return isTextFormatActive(editor, format);
  }

  if (BLOCK_FORMATS.includes(format)) {
    return isBlockFormatActive(editor, format);
  }

  return false;
};
