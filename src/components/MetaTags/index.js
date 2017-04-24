import React from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';

const MetaTags = ({ meta }) => (
  <Helmet
    title={meta.title}
    meta={[
      { name: 'description', content: meta.description },
      { name: 'og:site_name', content: meta.ogSiteName },
      { name: 'og:title', content: meta.ogTitle },
      { name: 'og:description', content: meta.ogDescription },
      { name: 'og:url', content: meta.ogUrl },
      { name: 'og:image', content: meta.ogImage },
      { name: 'twitter:title', content: meta.twitterTitle },
      { name: 'twitter:description', content: meta.twitterDescription },
      { name: 'twitter:image', content: meta.twitterImage },
    ]}
  />
);

MetaTags.propTypes = {
  meta: shape({
    title: string,
    description: string,
    ogSiteName: string,
    ogTitle: string,
    ogDescription: string,
    ogUrl: string,
    ogImage: string,
    twitterTitle: string,
    twitterDescription: string,
    twitterImage: string,
  }).isRequired,
};

export default MetaTags;
