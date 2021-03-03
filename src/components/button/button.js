import React from "react"
import styles from "./button.module.scss"

function Button({ children }) {
  return (
    <button className={styles.button}>
      <a href="mailto:prsgiulia@gmail.com">{children}</a>
    </button>
  )
}

export default Button
