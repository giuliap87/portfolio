import React from "react"
import ProjectPreview from "../project-preview/projectPreview"
import styles from "./cardscontainer.module.scss"

function cardscontainer({projects}) {
  return (
    <section className={styles.cardscontainer}>
      {projects.map(({ node: project }) => {
        const title = project.title
        const technologies = project.technologies
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid

        return (
          <ProjectPreview
            title={title}
            technologies={technologies}
            slug={slug}
            imageData={imageData}
            key={title}
          />
        )
      })}
    </section>
  )
}

export default cardscontainer
