import React from 'react';
import { object } from 'prop-types';
import cssModules from 'react-css-modules';
import MetaTags from '../../components/MetaTags';
import styles from './styles.scss';

const Subpage = ({ meta, data }) => (
  <div styleName="subpage-view" className="container">
    <MetaTags meta={meta} />
    <h1>Subpage</h1>
    <div><span styleName="label">Base currency:</span> {data.base}</div>
    <div><span styleName="label">Date:</span> {data.date}</div>
    <div styleName="currency-list">
      {Object.keys(data.rates).map(k => (
        <div key={k}>
          <span styleName="label">{`${k}:`}</span> {data.rates[k]}
        </div>
      ))}
    </div>
  </div>
);

Subpage.propTypes = {
  meta: object.isRequired,
  data: object.isRequired,
};

export default cssModules(Subpage, styles, { allowMultiple: true });
