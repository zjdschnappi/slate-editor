import React from 'react';
import classnames from 'classnames';

export default function ToolbarItem(props) {
  const { active, className, children, ...rest } = props;
  return (
    <span
      className={classnames(
        'toolbar-item',
        active ? 'toolbar-item-active' : '',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
