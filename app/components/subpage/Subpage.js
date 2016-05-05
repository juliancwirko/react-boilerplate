import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import style from './styles';

const Subpage = (props) => {
    const {params} = props;
    return (
        <div styleName='subpage'>
            {params.username} <Link to='/'>[back]</Link>
        </div>
    )
};

export default CSSModules(Subpage, style);
