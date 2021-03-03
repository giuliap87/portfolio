import React from "react"
import { graphql } from "gatsby"
import Project from "../components/project/project"
import SEO from "../components/SEO"


export const query = graphql`
query ($slug: String) {
  projectJson(slug: {eq: $slug}, image: {childImageSharp: {fluid: {srcSet: {}}}}) {
    id
    url
    description
    technologies
    website
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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
`

function ProjectTemplate({ data }) {
  const project = data.projectJson
  const title = project.title
  const description = project.description
  const imageData = project.image.childImageSharp.fluid
  const url = project.url
  const technologies = project.technologies
  const website = project.website

  const metaData = data.site.siteMetadata

  return (
    <div>
      <SEO title={metaData.title} author={metaData.author} titleTemplate={metaData.titleTemplate} description={metaData.description}/>

      <Project
        title={title}
        description={description}
        imageData={imageData}
        url={url}
        technologies={technologies}
        website={website}
      />
    </div>
  )
}

export default ProjectTemplate
