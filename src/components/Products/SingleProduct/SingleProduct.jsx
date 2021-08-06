import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import SwiperCore, {
    Autoplay, Mousewheel, Pagination,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import '../../../assets/styles/swiper.scss'

import styles from './SingleProduct.module.scss'

const SingleProduct = ({
    windowWidth,
    locale,
    labels,
    product,
    setShowDialog,
}) => {
    const getDirection = useCallback(() => windowWidth < 1191 ? 'vertical' : 'horizontal', [windowWidth])

    const swiperProps = {
        autoplay: { delay: 1000, pauseOnMouseEnter: true },
        autoHeight: true,
        pagination: {
            clickable: true,
        },
        direction: getDirection(),
        speed: 500,
        slidesPerView: 1,
    }

    const {
        title, description, ingredients, foodValue, storageConditions, packageDurability, brand, gallery,
    } = product
    SwiperCore.use([Autoplay, Mousewheel, Pagination])

    const renderGallery = useCallback(() => (
        gallery.map((img, i) => (
            <SwiperSlide key={`product-img-${i}`}>
                <img src={img} alt={`product image ${i}`} />
            </SwiperSlide>
        ))
    ), [gallery])

    const renderSlider = useCallback(() => (
        <Swiper
            {...swiperProps}
            className={windowWidth < 1191 ? styles.vertical : ''}
            onResize={(swiper) => swiper.changeDirection(getDirection())}
        >
            {renderGallery()}
        </Swiper>
    ), [windowWidth])

    return (
        <div className={styles.productWrapper}>
            <div className={styles.mobile}>
                <h3 className={styles.h1}>{labels.h1[locale]}<span>.</span></h3>
            </div>
            <div className={[styles.col, styles.leftSide].join(' ')}>
                {renderSlider()}
            </div>
            <div className={[styles.col, styles.rightSide].join(' ')}>
                <h3 className={styles.h1}>{labels.h1[locale]}<span>.</span></h3>
                <div className={styles.header}>
                    <div className={styles.headerItem}>
                        <h4 className={styles.title}>{title[locale]}</h4>
                        <p>{description[locale]}</p>
                    </div>
                    <div className={styles.headerItem}>
                        <img src={brand} alt="brand" />
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.bodyItem}>
                        <h4 className={styles.label}>{labels.ingredients[locale]}:</h4>
                        <p className={styles.text}>
                            {ingredients[locale]}
                        </p>
                    </div>
                    <div className={styles.bodyItem}>
                        <div>
                            <h5 className={styles.label}>
                                {labels.foodValue[locale]}
                            </h5>
                            <div className={styles.grid}>
                                <div className={styles.gridItem}>
                                    <p>{labels.proteins[locale]}</p><p>{foodValue.proteins[locale]}</p>
                                </div>
                                <div className={styles.gridItem}>
                                    <p>{labels.fats[locale]}</p><p>{foodValue.fats[locale]}</p>
                                </div>
                                <div className={styles.gridItem}>
                                    <p>{labels.carbohydrates[locale]}</p><p>{foodValue.carbohydrates[locale]}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inline}>
                            <h5 className={styles.label}>
                                {labels.storageConditions[locale]}:
                            </h5>
                            <p className={styles.text}>
                                {storageConditions[locale]}
                            </p>
                        </div>
                        <div className={styles.inline}>
                            <h5 className={styles.label}>
                                {labels.packageDurability[locale]}:
                            </h5>
                            <p className={styles.text}>
                                {packageDurability[locale]}
                            </p>
                        </div>
                    </div>
                </div>
                <Button className={['lira-button', styles.button].join(' ')} onClick={() => setShowDialog(true)}>
                    <span>{labels.buttonText[locale]}</span>
                </Button>
            </div>
        </div>
    )
}

SingleProduct.propTypes = {
    windowWidth: PropTypes.number.isRequired,
    locale: PropTypes.string.isRequired,
    labels: PropTypes.shape({}).isRequired,
    product: PropTypes.shape({}).isRequired,
    setShowDialog: PropTypes.func.isRequired,
}

export default SingleProduct
