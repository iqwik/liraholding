import React from 'react'
import { Spinner } from 'react-bootstrap'

import styles from './Preloader.module.scss'

const Preloader = () => (
    <div className={styles.preloader}>
        <Spinner animation="grow" className={styles.color} />
    </div>
)

export default Preloader
