import React from 'react';
import { RichtextButton } from '../RichText';
import { ColorButton, ColorIcon } from '../Color';
import {
  AlignButton,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
} from '../Align';
import {
  ColorButton as BackColorButton,
  ColorIcon as BackColorIcon,
} from '../BackgroundColor';
import { RICH_FORMATS_MAP } from '../RichText/util';
import { InsertImageButton } from '@/components/InsertImage';
import { InsertLinkButton } from '@/components/InsertLink';
import { EmojiButton, EmojiIcon } from '../Emoji';

const Toolbar = React.forwardRef(({ ...props }, ref) => {
  return (
    <div className="bear-editor-toolbar" ref={ref as any} {...props}>
      {Object.keys(RICH_FORMATS_MAP).map((item, index) => {
        const items = RICH_FORMATS_MAP[item];
        const Icon = items.icon;
        const title = items.title;
        return (
          <RichtextButton format={item} key={index} title={title}>
            <Icon />
          </RichtextButton>
        );
      })}
      <AlignButton format="align" position="left" title="align-left">
        <AlignLeftIcon />
      </AlignButton>
      <AlignButton format="align" position="center" title="align-center">
        <AlignCenterIcon />
      </AlignButton>
      <AlignButton format="align" position="right" title="align-right">
        <AlignRightIcon />
      </AlignButton>
      <ColorButton format="font-color">
        <ColorIcon />
      </ColorButton>
      <BackColorButton format="background-color">
        <BackColorIcon />
      </BackColorButton>
      <EmojiButton format="emoji">
        <EmojiIcon />
      </EmojiButton>
      <InsertImageButton />
      <InsertLinkButton />
    </div>
  );
});
export default Toolbar;
