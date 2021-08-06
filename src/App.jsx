import React, { useRef } from 'react'
import AppContext from './App.context'
import { useApp } from './App.hooks'
import {
    Preloader,
    Header,
    Banner,
    About,
    Products,
    Partners,
    Distribution,
    Contacts,
    Footer,
    Dialog,
} from './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {
    const ref = useRef()
    const contextValues = useApp(ref)

    return (
        <AppContext.Provider value={contextValues}>
            {contextValues.isLoading ? <Preloader /> : (
                <>
                    <Header />
                    <Banner />
                    <div ref={ref}>
                        <About />
                        <Products />
                        <Partners />
                        <Distribution />
                        <Contacts />
                    </div>
                    <Footer />
                    <Dialog />
                </>
            )}
        </AppContext.Provider>
    )
}

export default App
