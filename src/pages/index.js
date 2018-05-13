import React from "react"
import Helmet from 'react-helmet';
import Hero from '../components/Hero/Hero';
import Main from '../components/Main/Main';
import Link from "gatsby-link";
import Prompts from '../components/Prompts/Prompts';
import Footer from '../components/Footer/Footer';
import './reset.css';
import './index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet title={`Web Design Prompts`} />
      <Hero
        bgImageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-0.3.5…EyMDd9&s=a00dd14…&auto=format&fit=crop&w=1504&q=80"
        title="Web Design Prompts"
      />
      <Main>
        <p className="intro">Design prompts to help CodeNewbies, FreeCodeCampers, &amp; other beginners <a href="http://justbuildwebsites.com/" target="_blank">just&nbsp;build&nbsp;websites</a>.</p>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Link className="blog-post-preview-link" to={post.frontmatter.path}>
                <div
                  className="blog-post-preview"
                  style={{
                    backgroundImage: `url(${post.frontmatter.heroImage})`,
                    backgroundPositionX: post.frontmatter.heroX || 'inherit',
                    backgroundPositionY: post.frontmatter.heroY || 'inherit'
                  }}
                  key={post.id}>{post.frontmatter.title}</div>
              </Link>
            );
          })}
      </Main>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            heroImage
            heroX
            heroY
          }
        }
      }
    }
  }
`;
