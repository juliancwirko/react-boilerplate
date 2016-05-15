import React from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import style from './styles.styl';

const Subpage = (props) => {
  const { params } = props;
  return (
    <div styleName="subpage">
      {params.username} <Link to="/">[back]</Link>
    </div>
  );
};

Subpage.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default cssModules(Subpage, style);
