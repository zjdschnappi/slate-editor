import React from 'react';
import { Plugin, EditorProperties, Editor } from 'slate';
import { PluginOrPlugins, EditorProps, Plugins, RenderInlineProps } from 'slate-react';

export default function ImagePlugin(opt: any): PluginOrPlugins {
  return {
    schema: {
      inlines: {
        image: {
          isVoid: true,
        },
      },
    },
    renderInline: (props: RenderInlineProps, editor: Editor, next: () => any) => {
      const { attributes, node, isFocused } = props;

      switch (node.type) {
        case 'image': {
          const src = node.data.get('src');
          return <img {...attributes} src={src} />;
        }

        default: {
          return next();
        }
      }
    },
  };
}
