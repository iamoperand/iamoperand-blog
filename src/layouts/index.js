import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'graphql';
import Media from 'react-media';

import './index.css';
import '../styles/layout-override.css';

import Header from '../components/header';
import Sidebar from '../components/sidebar';


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Official blog of @iamoperand' },
        { name: 'keywords', content: 'iamoperand, Nikhil Arora' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {
          matches =>
            (matches
              ? (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '25px',
                  }}
                >
                  <div style={{ flex: 1 }}>{children()}</div>
                </div>
              )
              : (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '25px',
                  }}
                >
                  <div style={{ flex: 2.5, paddingRight: '30px' }}>
                    {children()}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Sidebar
                      title="WebStack"
                      description="Articles on React and Node.js. All articles are written by Me."
                    />
                    <Sidebar
                      title="About author"
                      description="I am a Full-stack Web Developer specializing in React and Node.js based in India."
                    />
                  </div>
                </div>
              )
            )
        }
      </Media>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default Layout;


export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
