import React from 'react';
import menuIcon from '../../../media/icons/menu.png';
import closeIcon from '../../../media/icons/close.png';
import logo from '../../../media/icons/logo.png';
import iconFlexible from '../../../media/icons/icon.svg';
import iconScalable from '../../../media/icons/icon2.svg';
import iconUser_Friendly from '../../../media/icons/icon3.svg';
import arrowUpIcon from '../../../media/icons/up-arrows.svg';

const Icon = (props) => <img {...props} src={props.src} alt="" className={props.className} />;

export const MenuIcon = (props) => <Icon {...props} src={menuIcon} />;
export const CloseIcon = (props) => <Icon {...props} src={closeIcon} />;
export const Logo = (props) => <Icon {...props} src={logo} />;
export const IconFlexible = (props) => <Icon {...props} src={iconFlexible} />;
export const IconScalable = (props) => <Icon {...props} src={iconScalable} />;
export const IconUser_Friendly = (props) => <Icon {...props} src={iconUser_Friendly} />;
export const ArrowUpIcon = (props) => <Icon {...props} src={arrowUpIcon} />;
