import React, { useContext } from 'react'
import AppContext from '../../App.context'
import { Button } from 'react-bootstrap'
import FormSubscribe from './FormSubscribe/FormSubscribe'

import styles from './Contacts.module.scss'

const Contacts = () => {
    const { locale, data, setShowDialog } = useContext(AppContext)
    const { img, phone, mail, site } = data.contacts
    const { h1, buttonText } = data.contacts

    return (
        <div
            className={styles.contacts}
            style={{ background: `url(${img}) no-repeat center center`, backgroundSize: 'cover' }}
        >
            <div className={[styles.col, styles.leftSide].join(' ')}>
                <h1>{h1[locale]}<span>.</span></h1>
                <ul className={styles.list}>
                    <li>{phone}</li>
                    <li>{mail}</li>
                    <li>{site}</li>
                </ul>
                <Button className="lira-button" onClick={() => setShowDialog(true)}>
                    <span>
                        {buttonText[locale]}
                    </span>
                </Button>
            </div>
            <div className={[styles.col, styles.rightSide].join(' ')}>
                <FormSubscribe />
            </div>
        </div>
    )
}

export default Contacts
