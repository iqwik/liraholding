import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { CloseButton, Modal } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'
import AppContext from '../../../App.context'
import Logo from 'Assets/img/logo.svg'

import styles from './NavLinksDialog.module.scss'

const NavLinksDialog = ({ show, onHide, navLinks }) => {
    const { locale, setLocale } = useContext(AppContext)

    const renderLocaleSwitcher = useCallback(() => {
        const nextLocale = locale === 'ru' ? 'en' : 'ru'
        return (
            <li onClick={() => setLocale(nextLocale)}>
                {nextLocale}
            </li>
        )
    }, [locale])

    return (
        <Modal {...{ show, onHide, fullscreen: true, className: styles.navLinksDialog }} >
            <div className={styles.inner}>
                <div className={styles.header}>
                    <ReactSVG src={Logo} className={styles.logo} />
                    <CloseButton onClick={onHide} className={styles.close} />
                </div>
                <ul className={styles.navLinks}>
                    {navLinks(styles.activeLink)}
                    {renderLocaleSwitcher()}
                </ul>
            </div>
        </Modal>
    )
}

NavLinksDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    navLinks: PropTypes.any,
}

export default NavLinksDialog
