import React, { useCallback, useContext } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import AppContext from '../../App.context'
import SingleProduct from './SingleProduct/SingleProduct'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

import styles from './Products.module.scss'

const Products = () => {
    SwiperCore.use([Navigation])
    const { locale, data, setShowDialog, windowWidth } = useContext(AppContext)
    const { labels, items } = data.products

    const swiperProps = {
        allowTouchMove: false,
        autoHeight: true,
        className: [styles.products, windowWidth < 1191 ? '--mob' : ''].join(' '),
        navigation: {
            clickable: true,
        },
        slidesPerView: 1,
    }

    const renderProducts = useCallback(() => (
        items.map((product, i) => (
            <SwiperSlide key={`product-${i}`}>
                <SingleProduct
                    {...{
                        windowWidth,
                        locale,
                        product,
                        labels,
                        setShowDialog,
                    }}
                />
            </SwiperSlide>
        ))
    ), [locale, data, windowWidth])

    return (
        <Swiper {...swiperProps}>
            {renderProducts()}
        </Swiper>
    )
}

export default Products
