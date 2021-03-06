import React from 'react';
import menuIcon from '../../../media/icons/menu.png';
import closeIcon from '../../../media/icons/close.png';
import logo from '../../../media/icons/logo.png';
import iconFlexible from '../../../media/icons/icon.svg';
import iconScalable from '../../../media/icons/icon2.svg';
import iconUser_Friendly from '../../../media/icons/icon3.svg';
import arrowUpIcon from '../../../media/icons/up-arrows.svg';
import wavedarkgreen from '../../../media/icons/wave.svg';
import about from '../../../media/icons/about.svg';
import about_us from '../../../media/icons/about_us.svg';

const Icon = (props) => <img {...props} src={props.src} alt="" className={props.className} />;

export const MenuIcon = (props) => <Icon {...props} src={menuIcon} />;
export const CloseIcon = (props) => <Icon {...props} src={closeIcon} />;
export const Logo = (props) => <Icon {...props} src={logo} />;
export const IconFlexible = (props) => <Icon {...props} src={iconFlexible} />;
export const IconScalable = (props) => <Icon {...props} src={iconScalable} />;
export const IconUserFriendly = (props) => <Icon {...props} src={iconUser_Friendly} />;
export const ArrowUpIcon = (props) => <Icon {...props} src={arrowUpIcon} />;
export const WaveDarkGreen = (props) => <Icon {...props} src={wavedarkgreen} />;
export const About = (props) => <Icon {...props} src={about} />;
export const About_Us = (props) => <Icon {...props} src={about_us} />;
