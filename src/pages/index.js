import React from "react"
import Layout from "../components/layout/layout"
import Paragraph from "../components/text/text"
import Button from "../components/button/button"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/SEO"
import CardsContainer from "../components/cardscontainer/cardscontainer"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allProjectJson {
        edges {
          node {
            id
            slug
            technologies
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          author
          description
          titleTemplate
        }
      }
    }
  `)

  const projects = data.allProjectJson.edges
  const metaData = data.site.siteMetadata
  return (
    <Layout>
      <SEO title={metaData.title} author={metaData.author} titleTemplate={metaData.titleTemplate} description={metaData.description}/>
      <main>
        <Paragraph alignment="left">
          From the moment I dove into <span>web-development</span>, I was
          completely hooked and began to devote all my free time to it. The
          engaging challenges that come with every project have{" "}
          <span>pushed me forward</span> in my studies and stimulated my{" "}
          <span>curiosity</span> to keep up with the <span>latest</span>{" "}
          developments in web <span>technologies</span>.
        </Paragraph>
        <Paragraph>
          Learning is my passion and{" "}
          <span>I am eager to join a motivated team of tech enthusiasts </span>
          to keep on growing together.
        </Paragraph>
        <Button>Email me</Button>

        <div
          style={{ height: "1px", backgroundColor: "#eee", margin: "30px 0" }}
        ></div>

        <Paragraph>
          <span>Front End Technologies:</span> HTML5, CSS3, JavaScript, React
          (Redux), NextJs, Gatsby, Sass, CSS in JS, CSS Modules, Material UI,
          Bootstrap, Reactstrap.
          <br />
          <span>Back end Technologies:</span> Node.js, Express, MongoDB.
        </Paragraph>

        <div
          style={{
            height: "1px",
            backgroundColor: "#eee",
            marginBottom: "30px",
          }}
        ></div>

        <Paragraph>
          <span>Recent work</span>
        </Paragraph>
        <CardsContainer projects={projects} />
      </main>
    </Layout>
  )
}
