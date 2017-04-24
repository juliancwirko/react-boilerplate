import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { routesPaths } from '../../settings';
import styles from './styles.scss';

const Header = () => (
  <div styleName="header">
    <Link to={routesPaths.home}>Home</Link>
    <Link to={routesPaths.subpage}>Subpage</Link>
  </div>
);

export default cssModules(Header, styles, { allowMultiple: true });
