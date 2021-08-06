import { createContext } from 'react'

const defaultValues = {
    isBrowser: false,
    isLoading: false,
    setIsLoading: () => {},
    cities: [],
    locale: null,
    setLocale: () => {},
    ref: null,
    showDialog: false,
    setShowDialog: () => {},
    windowWidth: null,
    successMessage: false,
    setSuccessMessage: () => {},
    onSendFeedback: () => {},
    onSubscribe: () => {},
}

const AppContext = createContext(defaultValues)

export default AppContext
