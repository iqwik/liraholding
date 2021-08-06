import React, { useCallback } from 'react'
import DistributionMobile from './DistributionMobile/DistributionMobile'
import { useDistribution } from './Distribution.hooks'
import { ReactSVG } from 'react-svg'
import Logo from 'Assets/img/logo.svg'

const Distribution = () => {
    const {
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
    } = useDistribution()

    return (
        <div>
            <DistributionMobile
                {...{
                    locale,
                    h1,
                    h4,
                    countries,
                    cities,
                }}
            />
            <div className={styles.distributionWrapper}>
                <div className={[styles.col, styles.leftSide].join(' ')}>
                    <ReactSVG className={styles.logo} src={Logo} alt="logo" />
                </div>
                <div className={styles.col}>
                    <div className={styles.distribution}>
                        <div className={styles.rightSide}>
                            {headingText()}
                            {renderDistributorsList()}
                        </div>
                        <div className={styles.circle} style={rotationStyles.circle}>
                            {renderCitiesCircle()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Distribution
