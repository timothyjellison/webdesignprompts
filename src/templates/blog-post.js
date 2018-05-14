import React from "react";
import Helmet from "react-helmet";
import Hero from '../components/Hero/Hero';
import Main from '../components/Main/Main';

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet title={`Web Design Prompts - ${post.frontmatter.title}`} />
      <Hero
        bgImageSrc={post.frontmatter.heroImage}
        title={post.frontmatter.title}
      />
      <Main className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Main>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        heroImage
      }
    }
  }
`
;
