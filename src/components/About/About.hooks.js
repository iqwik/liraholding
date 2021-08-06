import React, { useCallback, useContext, useState } from 'react'
import AppContext from '../../App.context'
import { useWindowSize } from '../utils/useWindowSize'
import { ReactSVG } from 'react-svg'
import recipeIcon from 'Assets/img/recipe.svg'
import qualityIcon from 'Assets/img/quality.svg'
import leafIcon from 'Assets/img/leaf.svg'

import styles from './About.module.scss'

export const useAbout = () => {
    const windowSize = useWindowSize()
    const { locale, data, setShowDialog } = useContext(AppContext)
    const {
        h1, h4, description, buttonText, benefits, features,
    } = data.about
    const [showMore, setShowMore] = useState(false)
    const renderBenefits = useCallback(() => {

        const r = benefits.map(({ h3, text }, i) => (
            <li key={`benefit-${i}`}>
                <h3>{h3[locale]}</h3>
                <p>{text[locale]}</p>
            </li>
        ))

        const showText = locale === 'ru' ? 'Показать еще' : 'Show more'
        const hideText = locale === 'ru' ? 'Скрыть' : 'Hide'

        if (windowSize.width < 1191) {
            r.push(
                <div
                    key="read-more"
                    className={styles.showMore}
                    onClick={() => setShowMore(!showMore)}
                >
                    <div className={styles.text}>
                        {!showMore ? showText : hideText}
                    </div>
                </div>
            )
        }

        return r
    }, [locale, data, windowSize, showMore])

    const renderFeatures = useCallback(() => {
        const icons = [
            <ReactSVG src={recipeIcon} />,
            <ReactSVG src={qualityIcon} />,
            <ReactSVG src={leafIcon} />,
        ]

        return (
            features.map((feature, i) => (
                <div key={`feature-${i}`} className={styles.feature}>
                    {icons[i]}
                    <span className={styles.featureText}>{feature[locale]}</span>
                </div>
            ))
        )
    }, [locale, data])

    return {
        h1: h1[locale],
        h4: h4[locale],
        description: description[locale],
        buttonText: buttonText[locale],
        renderBenefits,
        renderFeatures,
        setShowDialog,
        showMore,
        styles,
    }
}
