import React from "react"
import styles from "./project.module.scss"
import Image from "gatsby-image"
import { Link } from "gatsby"

function Project({
  url,
  imageData,
  title,
  description,
  technologies,
  website,
}) {
  return (
    <div className={styles.projectContainer}>
      <Link to="/" className={styles.back}>
        &larr; Back to home
      </Link>

      <div className={styles.project}>
        <div className={styles.img}>
          <Image fluid={imageData} alt={title} />
        </div>

        <ul className={styles.technologies}>
          <h3>Technologies used:</h3>
          {technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p>
            {description} <a href={website}>{website}</a>
          </p>
          <a href={url} className={styles.viewProject}>
            View project &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
