import React from 'react';
import {Palette, Spacing} from "mono-ds-tokens";

export const Button = (props: { children: any; }) => {
  const { children } = props;

  const buttonStyle = {
    color: Palette.white,
    backgroundColor: Palette.primary,
    padding: Spacing.small
  };

  return <button style={buttonStyle}>{children}</button>;
}
