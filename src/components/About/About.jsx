import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { useAbout } from './About.hooks'

const About = () => {
    const {
        h1,
        h4,
        description,
        buttonText,
        renderBenefits,
        renderFeatures,
        setShowDialog,
        showMore,
        styles,
    } = useAbout()

    return (
        <div className={styles.container}>
            <div className={[styles.col, styles.leftSide].join(' ')}>
                <div className={styles.wrapper}>
                    <h1 className={styles.h1}>
                        {h1}<span className={styles.dot}>.</span>
                    </h1>
                    <h4 className={styles.h4}>{h4}</h4>
                    <p>{description}</p>
                    <Button
                        className={['lira-button', styles.button].join(' ')}
                        onClick={() => setShowDialog(true)}
                    >
                        <span>{buttonText}</span>
                    </Button>
                </div>
            </div>
            <div className={[styles.col, styles.rightSide].join(' ')}>
                <ul className={[styles.benefits, showMore ? styles.isShown : ''].join(' ')}>
                    {renderBenefits()}
                </ul>
                <div className={styles.features}>
                    {renderFeatures()}
                </div>
            </div>
        </div>
    )
}

export default About
