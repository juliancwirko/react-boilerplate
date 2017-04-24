import React from 'react';
import { object } from 'prop-types';
import cssModules from 'react-css-modules';
import MetaTags from '../../components/MetaTags';
import styles from './styles.scss';

const Home = ({ meta, data }) => (
  <div styleName="home-view" className="container">
    <MetaTags meta={meta} />
    <h1>Home</h1>
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

Home.propTypes = {
  meta: object.isRequired,
  data: object.isRequired,
};

export default cssModules(Home, styles, { allowMultiple: true });
