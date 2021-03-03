import React from "react"
import Header from "../header/header"
import styles from "./layout.module.scss"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>{children}</div>
    </div>
  )
}

export default Layout
