import React, {
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import AppContext from '../../App.context'

import styles from './Header.module.scss'

export const useHeader = (ref) => {
    const { ref: parentRef, isBrowser, locale, setLocale, data } = useContext(AppContext)
    const links = data.navLinks[locale]
    const [scrollDown, setScrollDown] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [activeLink, setActiveLink] = useState(null)
    const [showNavLinksDialog, setShowNavLinksDialog] = useState(false)

    /**
     * Фиксация, скрытие header-a при сколле вниз/вверх
     */
    useEffect(() => {
        if (isBrowser) {
            const onScroll = () => {
                let currentPosition = window.pageYOffset
                setScrollDown(currentPosition > scrollTop)
                setScrollTop(currentPosition <= ref.current?.offsetHeight ? ref.current.offsetHeight * 2 : currentPosition);
            }
            window.addEventListener('scroll', onScroll)
            return () => window.removeEventListener('scroll', onScroll)
        }
    }, [scrollTop, isBrowser])

    useEffect(() => {
        ref.current.className = [styles.header, scrollDown ? styles.hidden : ''].join(' ')
    }, [scrollDown, ref.current])

    /**
     * Ссылки навигации
     */
    const navLinks = useCallback((activeLinkCls) => links.map(
        (link, i) => (
            <li
                key={`link-${i}`}
                className={i === activeLink ? activeLinkCls : ''}
                onClick={() => {
                    setShowNavLinksDialog(false)
                    parentRef.current.children[i].scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                    setActiveLink(i)
                }}
            >
                {link}
            </li>
        )
    ), [locale, activeLink, data])

    /**
     * Переключатель языка
     */
    const localeSwitcher = useCallback(() => {
        const nextLocale = locale === 'ru' ? 'en' : 'ru'
        return (
            <DropdownButton title={locale} className={styles.localeDropdown}>
                <Dropdown.Item onClick={() => setLocale(nextLocale)}>
                    {nextLocale}
                </Dropdown.Item>
            </DropdownButton>
        )
    }, [locale])

    return {
        navLinks,
        localeSwitcher,
        styles,
        showNavLinksDialog,
        setShowNavLinksDialog,
    }
}
