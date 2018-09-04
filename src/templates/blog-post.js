import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'graphql';


const Template = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }} // eslint-disable-line react/no-danger
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
  }
`;
