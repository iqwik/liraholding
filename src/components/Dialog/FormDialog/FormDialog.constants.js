export const initialValues = {
    name: '', email: '', phone: '', message: '',
}

export const formText = {
    h4: {
        ru: 'Форма обратной связи',
        en: 'Feedback form',
    },
    name: {
        ru: 'ФИО',
        en: 'Your name',
    },
    email: {
        ru: 'Email',
        en: 'Email',
    },
    phone: {
        ru: 'Телефон',
        en: 'Phone',
    },
    message: {
        ru: 'Текст сообщения',
        en: 'Your message',
    },
    button: {
        ru: 'Отправить',
        en: 'Send',
    },
    successH4: {
        ru: 'Сообщение отправлено. Менеджер скоро с Вами свяжется',
        en: 'Message was sent. Manager will contact you soon'
    },
    validateFields: {
        nameLess: {
            ru: 'Должно быть не более 15 символов',
            en: 'Must be 15 characters or less',
        },
        nameMore: {
            ru: 'Должно быть не менее 3 символов',
            en: 'Must be 3 characters or more',
        },
        nameReq: {
            ru: 'Имя обязательно',
            en: 'Name is required',
        },
        messageMore: {
            ru: 'Должно быть не менее 20 символов',
            en: 'Must be 20 characters or more',
        },
        messageReq: {
            ru: 'Сообщение обязательно',
            en: 'Message is required',
        },
        emailReq: {
            ru: 'Email обязательно',
            en: 'Email is required',
        },
        emailErr: {
            ru: 'Неверный адрес email',
            en: 'Invalid email address',
        },
        phoneReq: {
            ru: 'Телефон обязательно',
            en: 'Phone is required',
        }
    }
}

export const useValidate = (values, validateFields, locale) => {
    const errors = {}
    const {
        nameLess, nameMore, nameReq, messageMore, messageReq, emailReq, emailErr, phoneReq,
    } = validateFields

    if (!values.name) {
        errors.name = nameReq[locale]
    } else if (values.name.length < 2) {
        errors.name = nameMore[locale]
    } else if (values.name.length > 15) {
        errors.name = nameLess[locale]
    }

    if (!values.message) {
        errors.message = messageReq[locale]
    } else if (values.message.length < 20) {
        errors.message = messageMore[locale]
    }

    if (!values.email) {
        errors.email = emailReq[locale]
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = emailErr[locale]
    }

    if (!values.phone) {
        errors.phone = phoneReq[locale]
    }

    return errors
}
