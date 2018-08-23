import React from "react";
import Helmet from "react-helmet";
import Hero from '../components/Hero/Hero';
import Main from '../components/Main/Main';

export default function Template({data: {pagesJson}}) {
  return (
    <div className="blog-post-container">
      <Hero
        short
        style={{backgroundColor: pagesJson.frontmatter.color}}
        title={pagesJson.frontmatter.title}
      />
      <Main className="blog-post">
        <div className="blog-post-content">
        <ul>
          {pagesJson.topics.map(topic => {
            return <li>{topic.heading}</li>;
          })}
        </ul>
        </div>
      </Main>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    pagesJson(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        color
      }
      topics {
        heading
      }
    }
  }
`
;
