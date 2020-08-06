import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import pkg from '../../package.json';

const GTAG = 'GTM-MRJQTW3';

const Wrapper = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={pkg.description} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
        />
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTAG}');
          `}
        </script>
        <link rel="stylesheet" href="//codemirror.net/theme/dracula.css" />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Wrapper;
