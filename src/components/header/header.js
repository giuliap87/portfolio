import React from "react"
import styles from "./header.module.scss"
import avatar from "../../../data/images/avatar.jpg"
import { ImGithub, ImLinkedin, ImEnvelop } from "react-icons/im"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.block1}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <h1 className={styles.hello}>Hello, World!</h1>
        <p className={styles.description}>
          My name is <strong>Giulia Piras</strong>, I am a front end developer
          based in Berlin, Germany.
        </p>
      </div>
      <div className={styles.block2}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <a href="mailto:prsgiulia@gmail.com">
              <ImEnvelop />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/giuliap87">
              <ImGithub />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/giulia-piras-2205a6203/">
              <ImLinkedin />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          Copyright Giulia Piras {new Date().getFullYear()}
        </p>
      </div>
    </header>
  )
}

export default Header
