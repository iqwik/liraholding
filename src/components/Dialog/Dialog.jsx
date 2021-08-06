import React, { useContext } from 'react'
import AppContext from '../../App.context'
import { CloseButton, Modal } from 'react-bootstrap'
import FormDialog from './FormDialog/FormDialog'
import bgImg from 'Assets/img/dialog-bg.jpg'

import './Modal.scss'
import styles from './Dialog.module.scss'

const Dialog = () => {
    const { showDialog, setShowDialog, setSuccessMessage } = useContext(AppContext)
    const onHide = () => {
        setSuccessMessage(false)
        setShowDialog(false)
    }

    return (
        <Modal
            show={showDialog}
            onHide={onHide}
            fullscreen
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className={styles.dialog}>
                <div className={[styles.col, styles.leftSide].join(' ')}>
                    <CloseButton onClick={onHide} className={styles.close} />
                    <FormDialog />
                </div>
                <div
                    className={[styles.col, styles.rightSide].join(' ')}
                    style={{ background: `url(${bgImg}) no-repeat center center`, backgroundSize: 'cover' }}
                >
                    <CloseButton variant="white" onClick={onHide} className={styles.close} />
                </div>
            </div>
        </Modal>
    )
}

export default Dialog
