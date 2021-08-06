import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import AppContext from '../../../App.context'
import { useFormik } from 'formik'
import { formText, initialValues, useValidate } from './FormSubscribe.constants'

import { ReactSVG } from 'react-svg'
import plusIcon from 'Assets/img/plus.svg'

import styles from '../Contacts.module.scss'
import css from './FormSubscribe.module.scss'

const FormSubscribe = () => {
    const { locale, data, onSubscribe } = useContext(AppContext)
    const { subscribeText, placeholder } = data.contacts
    const { touched, errors, values, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validate: (values) => useValidate(values, formText.validateFields, locale),
        onSubmit: (values) => {
            const formData = new FormData()
            formData.append('email', values.email)
            onSubscribe(formData)
        },
    })

    return (
        <Form className={styles.subscribe} onSubmit={handleSubmit}>
            <h4>{subscribeText[locale]}</h4>
            <div className={styles.row}>
                <div style={{ position: 'relative' }}>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder={placeholder[locale]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={[styles.input, touched.email && errors.email ? css.errorBorder : ''].join(' ')}
                    />
                    {touched.email && errors.email && (<span className={css.error}>{errors.email}</span>)}
                </div>
                <Button type="submit" className={styles.subscribeButton}>
                    <ReactSVG src={plusIcon} />
                </Button>
            </div>
        </Form>
    )
}

export default FormSubscribe
