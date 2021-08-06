export const initialValues = { email: '' }

export const formText = {
    email: {
        ru: 'Email',
        en: 'Email',
    },
    validateFields: {
        emailReq: {
            ru: 'Email обязательно',
            en: 'Email is required',
        },
        emailErr: {
            ru: 'Неверный адрес email',
            en: 'Invalid email address',
        },
    }
}

export const useValidate = (values, validateFields, locale) => {
    const errors = {}
    const { emailReq, emailErr } = validateFields

    if (!values.email) {
        errors.email = emailReq[locale]
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = emailErr[locale]
    }

    return errors
}

