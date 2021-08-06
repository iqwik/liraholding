import React, { useRef } from 'react'
import { useHeader } from './Header.hooks'
import { ReactSVG } from 'react-svg'
import Logo from 'Assets/img/logo.svg'
import burgerIcon from 'Assets/img/burger.svg'
import NavLinksDialog from './NavLinksDialog/NavLinksDialog';

const Header = () => {
    const ref = useRef()
    const {
        navLinks,
        localeSwitcher,
        styles,
        showNavLinksDialog,
        setShowNavLinksDialog,
    } = useHeader(ref)

    return (
        <header {...{ ref }}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <ReactSVG src={Logo} className={styles.logo} alt="logo" />
                    <nav className={styles.nav}>
                        <ul className={styles.navLinks}>
                            {navLinks(styles.activeLink)}
                        </ul>
                        {localeSwitcher()}
                    </nav>
                    <div className={styles.burger} onClick={() => { setShowNavLinksDialog(true) }}>
                        <ReactSVG src={burgerIcon} />
                    </div>
                    <NavLinksDialog
                        show={showNavLinksDialog}
                        onHide={() => setShowNavLinksDialog(false)}
                        navLinks={navLinks}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
