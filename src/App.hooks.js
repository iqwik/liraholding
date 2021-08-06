import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { getData, requestSubscribe, sendFeedback } from 'API'
import { useWindowSize } from './components/utils/useWindowSize'

export const useApp = (ref) => {
    const { width } = useWindowSize()
    const [isBrowser] = useState(typeof window !== 'undefined')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [locale, setLocale] = useState(null)
    const [showDialog, setShowDialog] = useState(false)
    const [windowWidth, setWindowWidth] = useState(null)
    const [successMessage, setSuccessMessage] = useState(false)

    useEffect(() => {
        if (isBrowser && isLoading) {
            getData()
                .then((result) => {
                    if (!isEmpty(result)) {
                        return Promise.all([
                            setData(result),
                            setLocale('ru')
                        ])
                    }
                    return false
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [])

    useEffect(() => setWindowWidth(width), [width])

    const onSendFeedback = (values) => {
        setIsLoading(true)
        sendFeedback(values)
            .then((result) => {
                if (result.status === 200) {
                    setSuccessMessage(true)
                }
            })
            .finally(() => { setIsLoading(false) })
    }

    const onSubscribe = (values) => {
        setIsLoading(true)
        requestSubscribe(values)
            .then((result) => result.status)
            .finally(() => { setIsLoading(false) })
    }

    return {
        isBrowser,
        isLoading,
        setIsLoading,
        data,
        locale,
        setLocale,
        ref,
        showDialog,
        setShowDialog,
        windowWidth,
        successMessage,
        setSuccessMessage,
        onSendFeedback,
        onSubscribe,
    }
}
