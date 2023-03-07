import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

type TTextSize = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  size: TTextSize;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'a' | 'button';
  className?: string;
  href?: string;
  children?: React.ReactNode;
  mobileSize?: TTextSize;
  tabletSize?: TTextSize;
  desktopSize?: TTextSize;
  color?: EColor;
  bold?: boolean;
  onClick?: () => void;
  visible?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    className,
    href,
    color = EColor.black,
    bold = false,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    onClick,
    visible = true
  } = props;
    
  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
    { [styles.bold]: bold },
  );
  
  return (
    <As className={ classes } href={ href } onClick={ onClick }>
      { children }
    </As>
  )
}
