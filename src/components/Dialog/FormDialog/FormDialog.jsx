import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import AppContext from '../../../App.context'
import { formText, initialValues, useValidate } from './FormDialog.constants'

import styles from './FormDialog.module.scss'

const FormDialog = () => {
    const { locale, successMessage, onSendFeedback } = useContext(AppContext)
    const { touched, errors, values, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validate: (values) => useValidate(values, formText.validateFields, locale),
        onSubmit: (values) => onSendFeedback(values),
    })

    return successMessage ? (
        <div className={styles.formDialog}>
            <h4>{formText.successH4[locale]}</h4>
        </div>
    ) : (
        <Form className={styles.formDialog} onSubmit={handleSubmit}>
            <h4>{formText.h4[locale]}</h4>
            <div>
                <Form.Control
                    className={touched.name && errors.name ? styles.errorBorder : ''}
                    type="text"
                    name="name"
                    placeholder={`${formText.name[locale]}*`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {touched.name && errors.name && (<span className={styles.error}>{errors.name}</span>)}
            </div>
            <div>
                <Form.Control
                    className={touched.email && errors.email ? styles.errorBorder : ''}
                    type="email"
                    name="email"
                    placeholder={`${formText.email[locale]}*`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {touched.email && errors.email && (<span className={styles.error}>{errors.email}</span>)}
            </div>
            <div>
                <Form.Control
                    className={touched.phone && errors.phone ? styles.errorBorder : ''}
                    type="text"
                    name="phone"
                    placeholder={`${formText.phone[locale]}*`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                />
                {touched.phone && errors.phone && (<span className={styles.error}>{errors.phone}</span>)}
            </div>
            <div>
                <Form.Control
                    className={touched.message && errors.message ? styles.errorBorder : ''}
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder={`${formText.message[locale]}*`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                />
                {touched.message && errors.message && (<span className={styles.error}>{errors.message}</span>)}
            </div>
            <Button className="lira-button" type="submit">
                <span>
                    {formText.button[locale]}
                </span>
            </Button>
        </Form>
    )
}

export default FormDialog
