import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'graphql';


const Template = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet
        title={`${post.frontmatter.title} - ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
};

Template.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
