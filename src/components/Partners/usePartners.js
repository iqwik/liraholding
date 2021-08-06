import React, { useCallback, useContext } from 'react'
import AppContext from '../../App.context'

import styles from './Partners.module.scss'

export const usePartners = () => {
    const { locale, data, setShowDialog, windowWidth } = useContext(AppContext)
    const { gallery, h1, offerText, buttonText } = data.partners

    const getItemStyle = useCallback(() => {
        const style = { flex: '1 1 calc(50% - 26px)', margin: '0 13px 13px 0' }
        const width = windowWidth <= 480 ? 360 : 480
        let maxWidth = width / 2
        if (gallery.length > 4) {
            maxWidth = width / 4
            style.flex = `1 1 calc(25% - ${width === 360 ? 6 : 10}px)`
            style.margin = `0 ${width === 360 ? '3px 3px' : '5px 5px'} 0`
        }
        return { ...style, width: `${maxWidth}px`, height: `${maxWidth}px`, maxWidth: `${maxWidth}px` }
    }, [data, windowWidth])

    const renderPartners = useCallback(() => {
        const style = getItemStyle()
        return gallery.map((partnerLogo, i) => (
            <div
                {...{
                    key: `partner-logo-${ i }`,
                    className: styles.rectangle,
                    style
                }}
            >
                <img src={partnerLogo} alt="partner logo" />
            </div>
        ))
    }, [data, windowWidth])

    return {
        h1: h1[locale],
        renderPartners,
        buttonText: buttonText[locale],
        offerText: offerText[locale],
        setShowDialog,
        styles,
    }
}
