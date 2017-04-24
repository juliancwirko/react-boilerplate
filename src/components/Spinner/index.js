import React from 'react';
import cx from 'classnames';
import { bool } from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './styles.scss';

const Spinner = ({ nomargins }) => {
  const classes = cx({
    'spinner-wrapper': true,
    nomargins,
  });
  return (
    <div styleName={classes}>
      <div styleName="spinner">
        <div styleName="double-bounce1" />
        <div styleName="double-bounce2" />
      </div>
    </div>
  );
};

Spinner.propTypes = {
  nomargins: bool,
};

Spinner.defaultProps = {
  nomargins: false,
};

export default cssModules(Spinner, styles, { allowMultiple: true });
