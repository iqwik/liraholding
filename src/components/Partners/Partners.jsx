import React from 'react'
import { Button } from 'react-bootstrap'
import { usePartners } from './usePartners'
import { ReactSVG } from 'react-svg'
import logo from 'Assets/img/logo.svg'

const Partners = () => {
    const {
        h1,
        renderPartners,
        buttonText,
        offerText,
        setShowDialog,
        styles,
    } = usePartners()

    return (
        <div className={styles.partners}>
            <div className={[styles.col, styles.leftSide].join(' ')}>
                <h1>{h1}<span className={styles.dot}>.</span></h1>
                <div className={styles.grid}>
                    {renderPartners()}
                </div>
            </div>
            <div className={[styles.col, styles.rightSide].join(' ')}>
                <div className={styles.innerRectangle}>
                    <ReactSVG src={logo} className={styles.logo} />
                    <p>{offerText}</p>
                    <Button className={['lira-button', styles.button].join(' ')} onClick={() => setShowDialog(true)}>
                        <span>
                            {buttonText}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Partners
