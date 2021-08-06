import React, {
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import AppContext from '../../App.context'
import { ReactSVG } from 'react-svg'
import Cursor from 'Assets/img/distributor-cursor.svg'

import styles from './Distribution.module.scss'

export const useDistribution = () => {
    const defaultRotationStyle = { transform: 'rotate(0deg)' }
    const { locale, data } = useContext(AppContext)
    const { h1, h4, countries, cities } = data.distributors
    const positions = {}
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [rotationStyles, setRotationStyles] = useState({
        circle: defaultRotationStyle,
        cityOffsetLeft: '-100%',
        defDegree: 360 / cities.length,
    })

    useEffect(() => {
        const city = cities[selectedIndex][locale]

        let cityOffsetLeft = '-185%'
        if (
            city.toLocaleLowerCase() === 'железнодорожный'
            || city.toLocaleLowerCase() === 'zheleznodorozhny'
            || city.toLocaleLowerCase() === 'saint-petersburg'
        ) {
            cityOffsetLeft = '-440%'
        } else {
            if (city.length > 5 && city.length < 8) {
                cityOffsetLeft = '-220%'
            } else if (city.length > 7 && city.length < 10) {
                cityOffsetLeft = '-280%'
            } else if (city.length > 9 && city.length < 15) {
                cityOffsetLeft = '-320%'
            } else if (city.length >= 15) {
                cityOffsetLeft = '-380%'
            }
        }

        setRotationStyles({
            ...rotationStyles,
            circle: { transform: `rotate(-${positions[selectedIndex]}deg)` },
            cityOffsetLeft,
        })
    }, [selectedIndex])

    const renderCitiesCircle = useCallback(() => {
        let x = 0
        return cities.map((city, i) => {
            x += rotationStyles.defDegree
            positions[i] = x
            const style = {}
            if (i === selectedIndex) {
                style.left = rotationStyles.cityOffsetLeft
            }
            return (
                <div
                    key={`city-${i}`}
                    className={[styles.distributor, selectedIndex === i ? styles.active : ''].join(' ')}
                    style={{ transform: `rotate(${x}deg)` }}
                >
                    <div className={styles.distributorName}>
                        {selectedIndex === i && (
                            <div className={styles.distributorCursor}>
                                <ReactSVG src={Cursor} />
                            </div>
                        )}
                        <span {...{ style }}>
                            {city[locale]}
                        </span>
                    </div>
                </div>
            )
        })
    }, [rotationStyles, selectedIndex, locale, data])

    const headingText = useCallback(() => (
        <>
            <h2 className={styles.h2}>{h1[locale]}<span className={styles.yellowDot}>.</span></h2>
            <h4 className={styles.h4}>{h4[locale]}.</h4>
        </>
    ), [locale, data])

    const renderDistributorsList = useCallback(() => (
        <ul className={styles.cityList}>
            {cities.map((city, i) => (
                <li key={`city-${i}`}>
                    {countries?.[i] && (
                        <h5 className={styles.country}>
                            {countries[i][locale]}:
                        </h5>
                    )}
                    <span
                        onClick={() => setSelectedIndex(i)}
                        style={{ color: selectedIndex === i ? 'var(--iqwik-dark)' : 'var(--iqwik-dark-light)' }}
                    >
                        {city[locale]}
                    </span>
                </li>
            ))}
        </ul>
    ), [locale, data, selectedIndex])

    return {
        locale,
        h1,
        h4,
        countries,
        cities,
        headingText,
        renderCitiesCircle,
        renderDistributorsList,
        rotationStyles,
        styles,
    }
}
