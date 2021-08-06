import React, { useContext } from 'react'
import AppContext from '../../App.context'
import { ReactSVG } from 'react-svg'
import logo from 'Assets/img/logo.svg'
import facebookIcon from 'Assets/img/facebook.svg'
import instaIcon from 'Assets/img/insta.svg'
import youtubeIcon from 'Assets/img/youtube.svg'

import styles from './Footer.module.scss'

const Footer = () => {
    const { data: { social: { facebook, instagram, youtube } } } = useContext(AppContext)

    return (
        <footer className={styles.footer}>
            <div className={styles.innerBlock}>
                <ReactSVG src={logo} className={styles.logo} />
                <ul className={styles.social}>
                    <li>
                        <a href={facebook} target="_blank"><ReactSVG src={facebookIcon} /></a>
                    </li>
                    <li>
                        <a href={instagram} target="_blank"><ReactSVG src={instaIcon} /></a>
                    </li>
                    <li>
                        <a href={youtube} target="_blank"><ReactSVG src={youtubeIcon} /></a>
                    </li>
                </ul>
                <p className={styles.copyrights}><span className={styles.separator}>|</span>&copy; 2021 LIRA</p>
            </div>
        </footer>
    )
}

export default Footer
