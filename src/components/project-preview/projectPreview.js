import React from "react"
import styles from "./ProjectPreview.module.scss"
import Image from "gatsby-image"
import {Link} from "gatsby"

function ProjectPreview({ slug, imageData, title, technologies }) {
  return (
    <Link to={`/${slug}/`} className={styles.projectPreview}>
      <Image fluid={imageData} alt={title} className={styles.img} />
      <div className={styles.details}>
        <h2>{title}</h2>
        <h4>Technologies:</h4>{" "}
        <ul className={styles.list}>
          {" "}
          {technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
          <p className={styles.viewProject}>
            View this project &rarr;
          </p>
      </div>
    </Link>
  )
}

export default ProjectPreview
