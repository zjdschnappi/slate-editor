import React from 'react';
import { Element } from 'slate';

export const LinkElement = ({ attributes, children, element }: Element) => {
  switch (element.type) {
    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};
