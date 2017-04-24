import React from 'react';
import { arrayOf, element, oneOfType, object } from 'prop-types';
import cssModules from 'react-css-modules';
import Header from '../../components/Header';
import styles from './styles.scss';

const Main = ({ children }) => (
  <div styleName="main">
    <Header />
    {children}
  </div>
);

Main.propTypes = {
  children: oneOfType([arrayOf(element), object]).isRequired,
};

export default cssModules(Main, styles, { allowMultiple: true });
