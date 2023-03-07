import React from 'react';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../icons'; 

export enum EIcon {
  block = 'BlockIcon',
  comments = 'CommentsIcon',
  menu = 'MenuIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
  warning = 'WarningIcon',
}

interface IIconsProps {
  name: string;
  width?: number;
  height?: number; 
}

export function Icon({name, width, height}: IIconsProps) {
  switch(name) {
    case EIcon.block: return <BlockIcon width={width} height={height} />;
    case EIcon.comments: return <CommentsIcon width={width} height={height} />;
    case EIcon.save: return <SaveIcon width={width} height={height} />;
    case EIcon.share: return <ShareIcon width={width} height={height} />;
    case EIcon.warning: return <WarningIcon width={width} height={height} />;
    default: alert('Что-то не так');
  }
}


