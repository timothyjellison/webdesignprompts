import React from "react"
import Hero from '../components/Hero/Hero';
import Main from '../components/Main/Main';
import Link from "gatsby-link";
import './index.scss';

export default function Index({ data }) {
  const { edges } = data.allPagesJson;

  return (
    <div>
      <Hero
        bgImageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-0.3.5…EyMDd9&s=a00dd14…&auto=format&fit=crop&w=1504&q=80"
        title="Web Design Prompts"
      />
      <Main>
        <p className="intro">Design prompts to help CodeNewbies, FreeCodeCampers, &amp; other beginners <a href="http://justbuildwebsites.com/" target="_blank">just&nbsp;build&nbsp;websites</a>.</p>
        {edges
          .filter(post => post.node.frontmatter.title.length > 0)
          .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
          .map(({ node: post }) => {
            return (
              <Link className="blog-post-preview-link" to={post.frontmatter.path} key={post.id}>
                <div
                  className="blog-post-preview"
                  style={{
                    backgroundColor: post.frontmatter.color
                  }}
                >{post.frontmatter.title}</div>
              </Link>
            );
          })}
      </Main>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allPagesJson {
      edges {
        node {
          frontmatter {
            path
            order
            title
            color
          }
          topics {
            heading
          }
        }
      }
    }
  }
`;
