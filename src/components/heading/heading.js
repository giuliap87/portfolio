import React from 'react'
import styles from "./heading.module.scss"

function heading({title}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{title}</h1>
        </div>
    )
}

export default heading
