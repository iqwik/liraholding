import React, { useCallback, useContext } from 'react'
import AppContext from '../../App.context'
import { ReactSVG } from 'react-svg'
import fbIcon from 'Assets/img/facebook.svg'
import instaIcon from 'Assets/img/insta.svg'
import youtubeIcon from 'Assets/img/youtube.svg'

import styles from './Banner.module.scss'

const Banner = () => {
    const { locale, data } = useContext(AppContext)
    const { facebook, instagram, youtube } = data.social
    const renderH1 = useCallback(() => {
        const [str1, str2] = data.banner.h1[locale].split('<br/>')
        return (
            <>
                {str1}<span className={styles.yellowDot}>.</span><br />
                {str2 && <>{str2}<span className={styles.yellowDot}>.</span></>}
            </>
        )
    }, [locale, data])
    return (
        <div
            className={styles.banner}
            style={{ background: `url(${data.banner.img}) no-repeat center top`, backgroundSize: 'cover' }}
        >
            <h1 className={styles.h1}>
                {renderH1()}
            </h1>
            <ul className={styles.social}>
                <li>
                    <a href={facebook} target="_blank">
                        <ReactSVG src={fbIcon} />
                    </a>
                </li>
                <li>
                    <a href={instagram} target="_blank">
                        <ReactSVG src={instaIcon} />
                    </a>
                </li>
                <li>
                    <a href={youtube} target="_blank">
                        <ReactSVG src={youtubeIcon} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Banner
