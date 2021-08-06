import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SwiperCore, { Autoplay, Mousewheel, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import '../../../assets/styles/swiper.scss'
import styles from './DistributionMobile.module.scss'


const DistributionMobile = ({
    locale,
    h1,
    h4,
    countries,
    cities,
}) => {
    SwiperCore.use([Autoplay, Mousewheel, Navigation])

    const swiperProps = {
        allowTouchMove: false,
        navigation: {
            clickable: true,
        },
        direction: 'vertical',
        className: styles.distributorsSwiper,
        speed: 500,
        slidesPerView: 10,
    }

    const renderCities = useCallback(() => (
        cities.map((city, i) => (
            <SwiperSlide key={`city-key-${i}`} style={{ maxHeight: countries?.[i] ? '47px' : '26px' }}>
                {countries?.[i] && (
                    <h5 className={styles.country}>
                        {countries[i][locale]}:
                    </h5>
                )}
                <div className={styles.city}>{city[locale]}</div>
            </SwiperSlide>
        ))
    ), [locale, countries, cities])

    return (
        <div className={[styles.distributors, 'mob-distributors'].join(' ')}>
            <h1>
                {h1[locale]}<span>.</span>
            </h1>
            <h4>
                {h4[locale]}
            </h4>
            <Swiper {...swiperProps}>
                {renderCities()}
            </Swiper>
        </div>
    )
}

DistributionMobile.propTypes = {
    locale: PropTypes.string.isRequired,
    h1: PropTypes.shape({}).isRequired,
    h4: PropTypes.shape({}).isRequired,
    countries: PropTypes.any.isRequired,
    cities: PropTypes.any.isRequired,
}

export default DistributionMobile
