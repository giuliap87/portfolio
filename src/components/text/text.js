import React from "react"
import styles from "./text.module.scss"

function text({ children }) {
  return (
    <section className={styles.section}>
      <p className={styles.paragraph}>{children}</p>
    </section>
  )
}

export default text
